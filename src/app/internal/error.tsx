'use client'
import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className="error-page text-center d-flex align-items-center justify-content-center flex-column light-bg position-relative">
                <h1 className="font-magnita">500</h1>
                <h2 className="fw-bold">Page Error</h2>
                <p className="text-lg mb-45">{`Oops, something went wrong. We're been notified and we'er working on it.`}</p>
                <div><a href="/" className="btn-four">Go Back</a></div>
                <img src="/template images/lazy.svg" data-src="/template images/assets/ils_05.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="/template images/lazy.svg" data-src="/template images/assets/ils_06.svg" alt="" className="lazy-img shapes shape_02" />
            </div>
        </>
    )
}
