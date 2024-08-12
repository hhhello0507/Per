import React from "react";

export default function Nav() {
    return (
        <div
            style={{
                display: 'flex',
                position: 'fixed',
                top: 32,
                left: 32,
                gap: 12,
                alignItems: 'center'
            }}
        >
            <img
                src={'logo.png'}
                width={48}
                height={48}
                style={{
                    borderRadius: 8,
                    cursor: 'pointer'
                }}
                alt={'logo'}
            />
            <div
                style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >Per
            </div>
        </div>
    )
}