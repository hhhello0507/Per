import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Nav from "@/app/component/Nav";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Per, learn super fast",
    description: "learn super fast free",
    icons: {
        icon: '/favicon.'
    }
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <Nav/>
        {children}
        </body>
        </html>
    );
}
