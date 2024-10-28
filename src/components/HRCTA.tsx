import { contactDetails } from '@/lib/constants'
import React from 'react'

export default function HRCTA() {
    return (
        <>
            <div className="fancy-banner-eight wow fadeInUp mb-60 lg-mb-40" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                <div className="container">
                    <div className="bg-wrapper border-40 overflow-hidden position-relative z-1">
                        <div className="row align-items-end">
                            <div className="col-lg-7 col-md-7">
                                <div className="pb-80 lg-pb-40">
                                    <div className="title-one mb-30 lg-mb-10">
                                        <h2 className="text-dark">Need to speak to human resources?</h2>
                                    </div>
                                    <div className="position-relative d-inline-block mt-15">
                                        <a href={`mailto:${contactDetails.hrEmail}`} className="btn-four">Contact HR</a>
                                        <img src="/template/images/shape/shape_51.svg" alt="" className="lazy-img shapes shape_02 wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 text-center text-md-end">
                                <div className="media-wrapper position-relative z-1 d-inline-block">
                                    <img src="/img/hr-guy.png" alt="" className="lazy-img" />
                                    <img src="/template/images/shape/shape_52.png" alt="" className="lazy-img shapes shape_01" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
