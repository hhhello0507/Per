import React from "react";

export default function Spacer(
    {
        w,
        h,
        style
    }: {
        w?: number, // Unit: px
        h?: number, // Unit: px
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