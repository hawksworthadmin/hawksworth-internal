import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function HomeHero() {
    return (
        <>
            <section className='hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative' style={{ height: '100vh' }}>
                <div className='hero-slider-one m0 slick-initialized slick-slider'>
                    <div className='slick-list draggable'>
                        <div className='slick-track' style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/027/105/424/large_2x/blue-wall-in-home-office-for-mockup-or-copy-space-free-photo.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                        </div>
                    </div>
                </div >
                <div className='container position-relative'>
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 ms-auto">
                            <h1 className="hero-heading d-inline-block position-relative wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>Your business <br />Consultant &amp; <br />Solution.</h1>
                            <p className="text-xl text-white pt-35 pb-25 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>Empowering businesses with innovative strategies and actionable recommendations</p>
                            <a href="contact.html" className="btn-two icon-link wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <span>Let’s Talk</span>
                                <BsArrowRight className="lazy-img icon ms-2" size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <a className='more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft' style={{ visibility: "visible", animationName: "fadeInLeft" }}></a>
            </section >
        </>
    )
}
