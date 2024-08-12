"use client"

import styles from "./GoogleResult.module.css";
import ResultModel from "@/model/ResultModel";

export default function GoogleResult(
    {
        result
    }: {
        result: ResultModel
    }
) {
    return (
        // container
        <a
            href={result.formattedUrl}
            target={'_blank'}
        >
            <div className={styles.container}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 600,
                        alignItems: 'flex-start'
                    }}
                >
                    {/*info*/}
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        {/*display link*/}
                        <div
                            style={{
                                display: 'flex',
                                color: "#bbb",
                                fontSize: 12
                            }}
                        >
                            {result.formattedUrl}
                        </div>
                    </div>
                    <div style={{height: 4}}></div>
                    {/*title*/}
                    <h3
                        style={{
                            width: '100%',
                            display: 'flex',
                            color: "black",
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            fontSize: 16,
                            fontWeight: 400,
                            overflow: 'hidden'
                        }}
                    >
                        {result.title}
                    </h3>
                    {/*description*/}
                    <div
                        style={{
                            color: 'gray',
                            fontSize: 16,
                            marginTop: 4
                        }}
                    >
                        {result.snippet}
                    </div>
                </div>
                {result.pagemap?.cse_thumbnail.length > 0 && (
                    (() => {
                        const thumbNail = result.pagemap.cse_thumbnail[0];
                        return (
                            <img
                                src={thumbNail.src}
                                style={{
                                    display: 'flex',
                                    borderRadius: 8,
                                }}
                                width={thumbNail.width}
                                height={thumbNail.height}
                            />
                        );
                    })()
                )}
            </div>
        </a>
    );
};