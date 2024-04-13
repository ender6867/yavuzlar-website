"use client";
import { useEffect } from 'react'

const HeadC = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-72GT07QVDX');
    }, [])

    return (
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-72GT07QVDX"></script>
        </head>
    )
}

export default HeadC
