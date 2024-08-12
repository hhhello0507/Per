import React from "react";

export default function Spacer(
    {
        w,
        h,
        style
    }: {
        w?: number,
        h?: number,
        style?: React.CSSProperties
    }
) {

    if (w || h) {
        return <div style={{
            width: w,
            height: h,
            ...style
        }}>

        </div>
    }

    return <div
        style={{
            flex: 1,
            ...style
        }}
    >

    </div>
}