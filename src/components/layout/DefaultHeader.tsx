'use client'
import { useAppContext } from '@/context/app.context';
import Link from 'next/link'
import React, { useState } from 'react'

type EachNav = { label: string; route: string; subNav?: EachNav[] }



export default function DefaultHeader() {
    const { offices } = useAppContext();
    const [show, setShow] = useState(false);

    const navList: EachNav[] = [
        {
            label: "Home",
            route: '/internal/website'
        },
        {
            label: "Resources",
            route: '/internal/website/resources'
        },
        // {
        //     label: "Openings",
        //     route: '/internal/website/openings'
        // },

        {
            label: "Events",
            route: '/internal/website/events'
        },
        {
            label: "People",
            route: '/internal/website/people',
            //@ts-ignore
            subNav: offices.map((eachOffice) => ({
                label: eachOffice.data.name,
                route: `/internal/website/people?office=${eachOffice.uid}`,
            }))
        },
        // {
        //     label: "About",
        //     route: '/internal/website/about'
        // },
    ]
    return (
        <>
            <header id='site-header' className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu">
                <div className="inner-content position-relative">
                    <div className="top-header">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo order-lg-0">
                                <Link href="/internal/website" className="d-flex align-items-center" style={{ width: '200px', height: '50px' }}>
                                    <img src="/logo-light.svg" alt="brand logo" />
                                </Link>
                            </div>
                            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                                <ul className="d-flex align-items-center style-none">
                                    <li className="d-none d-md-block"><Link href="/internal/website/about" className="btn-one tran3s">About Us</Link></li>
                                </ul>
                            </div>
                            <nav className="navbar navbar-expand-lg p0 order-lg-2">
                                <button className="navbar-toggler d-block d-lg-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={show ? "true": "false"} aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                                    <span></span>
                                </button>
                                <div className={`collapse navbar-collapse ${show && 'show'}`} id="navbarNav">
                                    <ul className="navbar-nav align-items-lg-center">
                                        <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="/logo-light.svg" alt="logo" width={230} /></a></div></li>
                                        {/* <li className="nav-item dropdown">
                                            <Link className="nav-link" href={`/internal/website`} role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                Home
                                            </Link>
                                        </li> */}
                                        {
                                            navList.map((eachNav, index) => {
                                                return <EachNav key={`each-nav-${index}`} eachNav={eachNav} onClick={() => setShow(false)} />
                                            })
                                        }

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


const EachNav = ({eachNav, onClick}:{eachNav:any; onClick: () => void;}) => {
    const [show, setShow] = useState(false);
    return <>
        <li className={`nav-item ${eachNav.subNav && `dropdown`}`}>
            <Link className={`nav-link ${eachNav.subNav && `dropdown-toggle`}`} href={eachNav.subNav ? "" : eachNav.route} role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded={show ? "true": "false"} onClick={() => {
                    if(eachNav.subNav) {
                        setShow(!show)
                    }else {
                        onClick()
                    }
                }}>
                {eachNav.label}
            </Link>
            {
                eachNav?.subNav && eachNav?.subNav.length > 0 ? <ul className={`dropdown-menu ${show ? "show": ""}`} >
                    {eachNav.subNav.map((eachSubNav:any, index:number) => {
                        return <li key={`sub-nav-${index}`} onClick={() => onClick()}>
                            <Link href={eachSubNav.route} className="dropdown-item">
                                <span>{eachSubNav.label}</span>
                            </Link>
                        </li>
                    })}
                </ul> : null
            }
        </li>
    </>
}
