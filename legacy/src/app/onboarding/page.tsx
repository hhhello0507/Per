"use client"

import styles from "@/app/onboarding/page.module.css";
import shared from '@/app/shared.module.css';
import React, {useEffect, useRef, useState} from "react";
import GoogleResultCell from "@/app/component/GoogleResultCell";
import Spacer from "@/app/component/Spacer";
import {ResultModels} from "@/model/ResultModel";
import {SearchType, searchTypes} from "@/type/SearchType";
import searchService from "@/service/SearchService";
import StarFill from "@Public/StarFill.svg";

export default function Onboarding() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <main
            className={shared.main}
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
                    <div className={styles.subtitle}>Enter skill you want to learn! ex. TypeScript, Rust, Unity Engine</div>
                </div>
                <Spacer h={30}/>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12
                    }}
                >
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                        }}
                        ref={inputRef}
                        style={{
                            maxWidth: 300
                        }}
                        className={styles.input}
                        type="text"
                        placeholder={'Enter skill'}
                    />
                    <button
                        className={styles.button}
                        onClick={() => {
                            alert('Coming soon');
                        }}
                    >
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
                {/*<div TODO: Fix this */}
                {/*    style={{*/}
                {/*        fontSize: 16,*/}
                {/*        marginBottom: 8,*/}
                {/*        marginTop: 8,*/}
                {/*        color: 'gray'*/}
                {/*    }}*/}
                {/*>Total &apos;100&apos; searched{selectedSearchType !== 'All' && ` in ${selectedSearchType}`}.*/}
                {/*</div>*/}
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
        </main>
    );
}
