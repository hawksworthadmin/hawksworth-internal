// import DefaultFooter from '@/components/layout/DefaultFooter'
import DefaultHeader from '@/components/layout/DefaultHeader'
import React from 'react'
import './website.css'

type Props = {
    children: React.ReactNode
}

export default function layout({ children }: Props) {
    return (
        <>
            <div className="main-page-wrapper">
                <DefaultHeader />
                {children}
                {/* <DefaultFooter /> */}
            </div>
        </>
    )
}