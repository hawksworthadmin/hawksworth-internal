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
                                <h2>15k+ Client using Our Services.</h2>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability</p>
                            <div className="d-inline-flex flex-wrap align-items-center">
                                <a href="about-us-v1.html" className="btn-four mt-15 me-4">More About us</a>
                                <a href="contact.html" className="btn-three icon-link mt-15">
                                    <span>Request a Callback</span>
                                    <img src="/template/images/icon/icon_09.svg" alt="" className="lazy-img icon ms-1" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                            <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                                <ul className="style-none">
                                    <li>Mobile app easy management &amp; access</li>
                                    <li>{`Ton’s of features for handle the card easily`}</li>
                                    <li>Strong security system.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
