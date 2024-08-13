'use client';

import shared from '@/app/shared.module.css';
import styles from "@/app/onboarding/page.module.css";
import Globe from "@Public/Globe.svg";
import React, {useEffect, useRef, useState} from "react";
import {languageType, languageTypeKey} from "@/type/LanguageType";
import searchService from "@/service/SearchService";
import {ResultModels} from "@/model/ResultModel";
import {SearchType, searchTypes} from "@/type/SearchType";
import Spacer from "@/app/component/Spacer";
import GoogleResultCell from "@/app/component/GoogleResultCell";

export default function Home() {

    const indicatorRef = useRef<HTMLUListElement>(null);
    const prompt = 'temp';
    const [content, setContent] = useState<string[]>([]);
    const [googleResult, setGoogleResult] = useState<ResultModels>([]);
    const [selectedSearchType, setSelectedSearchType] = useState<SearchType | undefined>(undefined);

    const [selectedLanguage, setSelectedLanguage] = useState<string>(languageType['lang_en']);
    const [selectingLanguage, setSelectingLanguage] = useState(false);

    useEffect(() => {
        if (!prompt) {
            return;
        }
        if (selectedSearchType) {
            search();
        }
    }, [selectedSearchType]);

    async function search() {
        const languageType = languageTypeKey(selectedLanguage);
        if (!languageType || !prompt || !selectedSearchType) {
            return;
        }
        try {
            const result = await searchService.search(prompt, selectedSearchType, languageType);
            setGoogleResult(result);
        } catch (e) {
            console.log(e);
        }
    }

    function clearSearchResult() {
        setSelectedSearchType(undefined);
        setGoogleResult([]);
    }


    return (
        <main
            className={shared.main}
            onClick={() => {
                setSelectingLanguage(false);
            }}
        >
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div className={styles.globeButton}>
                    <Globe
                        style={{
                            color: '#a2a2a6',
                            width: 36,
                            height: 36
                        }}
                        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                            e.stopPropagation();
                            setSelectingLanguage(true);
                        }}
                    />
                    {selectingLanguage && (
                        <div className={styles.dropdownContent}>
                            {Object.entries(languageType).map((item, i) => (
                                <button
                                    key={i}
                                    className={styles.dropdownItemButton}
                                    onClick={() => {
                                        setSelectedLanguage(item[1]);
                                    }}
                                >
                                            <span
                                                style={{
                                                    fontSize: 16
                                                }}
                                            >{item[1]}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <span style={{
                    fontSize: 14,
                    color: 'gray'
                }}>{selectedLanguage}</span>

                <ul
                    ref={indicatorRef}
                    style={{
                        position: 'sticky',
                        top: 16,
                        display: 'flex',
                        listStyle: 'none',
                        gap: 4,
                        background: '#f4f5f9',
                        padding: 6,
                        borderRadius: 16
                    }}
                >
                    {searchTypes.map((type, idx) => (
                        <li
                            key={idx}
                            style={{
                                color: type === selectedSearchType ? 'black' : 'gray',
                                background: type === selectedSearchType ? 'white' : 'transparent',
                            }}
                            className={styles.tabBarItem}
                            onClick={() => {
                                setSelectedSearchType(type);
                            }}
                        >{type}</li>
                    ))}
                </ul>
                <Spacer h={12}/>
                {content.map((str, index) => (
                    <div key={index}>{str}</div>
                ))}
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        alignSelf: 'stretch'
                    }}
                >
                    {googleResult.map((result, idx) =>
                        <GoogleResultCell key={idx} result={result}/>
                    )}
                </ul>
            </div>
        </main>
    )
}