'use client'

import React from "react";
import GoogleLoginButton from "@/app/component/GoogleLoginButton";
import Spacer from "@/app/component/Spacer";

export default function Nav() {
    return (
        <div
            style={{
                display: 'flex',
                position: 'fixed',
                gap: 12,
                alignItems: 'center',
                background: 'white',
                width: '100vw',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                border: '1px solid #eee',
                zIndex: 1000,
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
            <Spacer/>
            <GoogleLoginButton
                onSuccess={(response) => {
                    console.log(response);
                }}
                onError={() => {
                    console.log('login failed');
                }}
            />
        </div>
    )
}