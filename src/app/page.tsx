"use client"

import styles from "./page.module.css";
import {useRef, useState} from "react";
import axios from "axios";
import GoogleResult from "@/app/component/GoogleResult";
import Spacer from "@/app/component/Spacer";
import {ResultModels, ResultsMock} from "@/model/ResultModel";
import {SearchType, searchTypes} from "@/type/SearchType";
import searchService from "@/service/SearchService";
import chatService from "@/service/ChatService";

export default function Home() {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [content, setContent] = useState<string[]>([]);
    const [googleResult, setGoogleResult] = useState<ResultModels>(ResultsMock);
    const [selectedSearchType, setSelectedSearchType] = useState<SearchType>('All');

    async function search() {
        const prompt = inputRef.current?.value;
        if (!prompt) {
            alert('Please enter prompt');
            return;
        }
        try {
            const result = await searchService.search(prompt)
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
        <main className={styles.main}>
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
                    <input
                        ref={inputRef}
                        style={{
                            width: 300
                        }}
                        className={styles.input}
                        type="text"
                        placeholder={'Enter skill'}
                    />
                    <button
                        className={styles.button}
                    />
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
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: 4,
                    background: '#f4f5f9',
                    padding: 6,
                    borderRadius: 16,
                }}>
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
                        <GoogleResult key={idx} result={result}/>
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
                Hello
            </div>
        </main>
    );
}
