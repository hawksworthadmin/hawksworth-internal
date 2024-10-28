'use client'
import { contactDetails } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

export default function HomeAbout() {
    return (
        <>
            <div className="text-feature-one mb-150 lg-mb-100 mt-150 lg-mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                            <div className="title-one">
                                <div className="upper-title">About us</div>
                                <h2>Who We Are</h2>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">We are a diverse group of young entrepreneurs, investors, strategists, innovators, and creative problem-solvers. Our team embodies the spirit of African ingenuity while being equally at home in Asia, the Americas, the Middle East, or Europe. We combine the idealism of dreamers with the pragmatism of seasoned business leaders, offering unique global perspectives and local expertise.</p>
                            <div className="d-inline-flex flex-wrap align-items-center">
                                <Link href="/internal/website/about" className="btn-four mt-15 me-4">More About us</Link>
                                <Link href={`mailto:${contactDetails.hrEmail}`} className="btn-three icon-link mt-15">
                                    <span>Contact HR</span>
                                    <img src="/template/images/icon/icon_09.svg" alt="" className="lazy-img icon ms-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                            <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                                <ul className="style-none">
                                    <li>Fostering creativity to solve problems</li>
                                    <li>{`Inspire and empower businesses`}</li>
                                    <li>{`Commitment to ethical practices guides`}</li>
                                    <li>{`Deliver the highest standard in every aspect`}.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
