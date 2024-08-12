"use client"

import styles from "./page.module.css";
import React, {useEffect, useRef, useState} from "react";
import GoogleResultCell from "@/app/component/GoogleResultCell";
import Spacer from "@/app/component/Spacer";
import {ResultModels} from "@/model/ResultModel";
import {SearchType, searchTypes} from "@/type/SearchType";
import searchService from "@/service/SearchService";
import chatService from "@/service/ChatService";
import StarFill from "@Public/StarFill.svg";
import Globe from "@Public/Globe.svg";
import {languageType} from "@/type/LanguageType";

export default function Home() {
    const indicatorRef = useRef<HTMLUListElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const prompt = inputRef.current?.value;
    const [content, setContent] = useState<string[]>([]);
    const [googleResult, setGoogleResult] = useState<ResultModels>([]);
    const [selectedSearchType, setSelectedSearchType] = useState<SearchType>('All');
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
        if (!prompt) {
            return;
        }
        try {
            const result = await searchService.search(prompt, selectedSearchType);
            setGoogleResult(result);
        } catch (e) {
            console.log(e);
        }
    }

    async function generate() {
        const prompt = inputRef.current?.value;
        if (!prompt) {
            alert('Please enter prompt');
            return;
        }

        const response = await chatService.chat(prompt);
        const reader = response.body?.getReader()!;
        const decoder = new TextDecoder();
        let s = '';
        while (true) {
            let {done, value} = await reader.read();
            if (done) break;
            const newContent = decoder.decode(value, {stream: true});
            s += newContent;
            setContent(content => {
                let originContent: string = content.reduce((a, b) => a + '\n' + b, '');
                originContent += newContent
                return originContent.split('\n');
            });
        }
    }

    return (
        <div
            className={styles.main}
            onClick={() => {
                setSelectingLanguage(false);
            }}
        >
            <div className={styles.container}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    alignItems: 'center',
                    marginTop: 32
                }}>
                    <div className={styles.title}>Elegant skill search engine</div>
                    <div className={styles.subtitle}>Enter skill you want to learn! ex. TypeScript, Rust, Unity Engine
                    </div>
                </div>
                <Spacer h={30}/>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                    </div>
                    <input
                        ref={inputRef}
                        style={{
                            width: 300
                        }}
                        className={styles.input}
                        type="text"
                        placeholder={'Enter skill'}
                    />
                    <button className={styles.button}>
                        <StarFill
                            style={{
                                fill: 'white'
                            }}
                            width={36}
                            height={36}
                        />
                    </button>
                </div>
                <Spacer h={32}/>
                <div
                    style={{
                        fontSize: 16,
                        marginBottom: 8,
                        marginTop: 8,
                        color: 'gray'
                    }}
                >Total &apos;100&apos; searched{selectedSearchType !== 'All' && ` in ${selectedSearchType}`}.
                </div>
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
            {/*footer*/}
            <div
                style={{
                    display: 'flex',
                    background: 'white',
                    alignSelf: 'stretch',
                    padding: '32px 4rem',
                    borderTop: '1px solid #eee',
                    color: 'gray'
                }}
            >
                Connect&nbsp;-&nbsp;<a
                style={{
                    color: 'var(--primary)'
                }}
                href="mailto:hhhello0507@gmail.com">hhhello0507@gmail.com
            </a>
            </div>
        </div>
    );
}
