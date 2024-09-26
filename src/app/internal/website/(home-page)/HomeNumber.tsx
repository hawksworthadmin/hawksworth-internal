import React from 'react'
import { BsRocketTakeoff } from 'react-icons/bs'

type Props = {}

export default function HomeNumber({ }: Props) {
    return (
        <>
            <div className="text-feature-two position-relative pt-110 lg-pt-80 pb-110 lg-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="title-one">
                                <h2 className="text-white">The Numbers Reflect Our Reputation.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-auto">
                            <p className="m0 text-md text-white md-pt-10">{`Efficient problem-solving, insightful market analysis, and actionable plans made the consulting invaluable to our business's success.`}</p>
                        </div>
                    </div>

                    <div className="row gx-0 mt-50 lg-mt-20 md-mt-10">
                        <div className="col-lg-4">
                            <div className="card-style-five text-center mt-60">
                                <div className="icon d-flex align-content-center justify-content-center">
                                    <BsRocketTakeoff className="lazy-img text-secondary" size={45} />
                                </div>
                                <div className="main-count fw-500 text-secondary"><span className="counter">120</span>mil+</div>
                                <p className="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">We’ve experience more than 10+ years with success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-style-five text-center mt-60">
                                <div className="icon d-flex align-content-center justify-content-center">
                                    <BsRocketTakeoff className="lazy-img text-secondary" size={45} />
                                </div>
                                <div className="main-count fw-500 text-secondary">$<span className="counter">1.3</span>b+</div>
                                <p className="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">We achieve lot for our work from top certified agency.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-style-five text-center mt-60">
                                <div className="icon d-flex align-content-center justify-content-center">
                                    <BsRocketTakeoff className="lazy-img text-secondary" size={45} />
                                </div>
                                <div className="main-count fw-500 text-secondary"><span className="counter">730</span>k+</div>
                                <p className="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">We’ve more than happy 3000+ client all over the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/template/images/lazy.svg" data-src="/template/images/shape/shape_07.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="/template/images/lazy.svg" data-src="/template/images/shape/shape_08.svg" alt="" className="lazy-img shapes shape_02" />
            </div>
        </>
    )
}