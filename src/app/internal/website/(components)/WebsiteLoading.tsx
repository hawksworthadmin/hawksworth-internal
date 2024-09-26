'use client'
import { useAppContext } from '@/context/app.context'
import React from 'react'

export default function WebsiteLoading() {
    const { loading } = useAppContext();
    return (
        <>
            <div id="preloader" style={{ display: loading ? "block" : "none" }}>
                <div id="ctn-preloader" className="ctn-preloader d-flex align-items-center justify-content-center" style={{ display: loading ? "block" : "none" }}>
                    <div className="icon- d-flex gap-4 flex-column">
                        <img src="/logo-dark.png" alt="" className="m-auto d-block" width={300} />
                        <img src="https://cdn.dribbble.com/users/1085124/screenshots/4790462/blob.gif" alt="" className="m-auto d-block" width={80} />
                    </div>
                </div>
            </div>
        </>
    )
}
