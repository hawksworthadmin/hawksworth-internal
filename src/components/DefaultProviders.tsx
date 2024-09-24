'use client'
import React, { useEffect } from 'react'

type Props = {
    children: any;
}

export default function DefaultProviders({ children }: Props) {

    useEffect(() => {
        const handleScroll = () => {
            const siteHeader = document.getElementById('site-header');
            if (window.scrollY > 0 && siteHeader) {
                siteHeader.classList.add('fixed');
            } else if (siteHeader) {
                siteHeader.classList.remove('fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {children}
        </>
    )
}
