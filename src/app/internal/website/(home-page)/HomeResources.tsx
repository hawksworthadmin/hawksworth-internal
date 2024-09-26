import EachResource from '@/components/EachResource'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function HomeResources() {
    return <>
        <div className="block-feature-three position-relative mt-150 lg-mt-80 pb-150 lg-pb-80 sm-pb-60">
            <div className="container">
                <div className="position-relative">
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                            <div className="title-one mb-90 lg-mb-50">
                                <h2>Resources</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-xxl-5">
                        <div className="col-lg-8">
                            <div className="block-one pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 position-relative border-30 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="tag d-inline-block border-30 fw-500 text-uppercase mb-15">Consulting</div>
                                        <div className="date text-dark"><span className="fw-500">Featured -</span> 18 Jul 2023</div>
                                    </div>
                                    <div className="col-lg-7">
                                        <h3 className="block-title d-inline-block position-relative"><a href="project-details-v1.html">Manage your online banking and get rewarded</a></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="block-two border-30 d-flex mt-45 lg-mt-30 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                <div className="img-wrapper"></div>
                                <div className="text-wrapper bg-white">
                                    <div className="date">18 Jul 2023</div>
                                    <h3 className="block-title d-inline-block position-relative mt-5 mb-40 lg-mb-30"><a href="project-details-v1.html">Gold card user will get priority pass for <br className="d-none d-lg-block" /> Airport.</a></h3>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="tag text-uppercase fw-500">Payments</div>
                                        <a href="project-details-v1.html" className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 md-mt-30 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div className="date">3 Aug 2023</div>
                                <h3 className="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50"><a href="project-details-v1.html">Gold card user will get priority pass for Airport.</a></h3>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="tag text-uppercase fw-500">DESIGN</div>
                                    <a href="project-details-v1.html" className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                            <div className="block-four border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-15 pb-30 mt-45 lg-mt-30 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <h3 className="block-title d-inline-block position-relative mt-20 mb-250 lg-mb-150 sm-mb-100"><a href="project-details-v1.html">Our Travel Card Makes <br className="d-none d-xl-block" />you Happy.</a></h3>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="tag text-uppercase fw-500">DESIGN</div>
                                    <a href="project-details-v1.html" className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-btn sm-mt-40">
                        <a href="project-v1.html" className="btn-five icon-link">
                            <span className="text">See all</span>
                            <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-right"></i></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <section className=' blog-section-two position-relative mt-150 lg-mt-80 pb-130 lg-pb-80'>
                <div className='container'>
                    <div className='position-relative'>
                        <div className="title-two mb-30 lg-mb-10">
                            <h2 className="text-dark">Resources</h2>
                        </div>
                        <div className="section-btn sm-mt-60" style={{ position: 'absolute', right: 0 }}>
                            <a href="blog-v1.html" className="btn-seven d-inline-flex align-items-center">
                                <span className="text">See all</span>
                                <div className="icon tran3s rounded-circle d-flex align-items-center">
                                    <BsArrowRight className="lazy-img text-white" size={25} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='row gx-xl-5'>
                        <EachResource />
                        <EachResource />
                    </div>


                </div>
            </section>
        </>
    )
}
