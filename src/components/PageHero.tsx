import React from 'react'

type Props = {
    heading: string;
    subHeading?: string;
}

export default function PageHero({ heading, subHeading }: Props) {
    return (
        <>
            <div className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 md-pb-70 position-relative" style={{ backgroundImage: `url(/template/images/media/img_32.jpg)` }}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1 className="hero-heading d-inline-block position-relative text-white">
                                {heading}
                                </h1>
                                {/* <img src="/template/images/shape/shape_31.svg" alt="" /> */}
                        </div>
                        <div className="col-xl-4 col-lg-5 ms-auto">
                            <p className="text-white text-lg mb-70 lg-mb-40">{subHeading}</p>
                            <ul className="style-none d-inline-flex pager">
                                <li><a href="index.html">Home</a></li>
                                <li>/</li>
                                <li><a href="#">Pages</a></li>
                                <li>/</li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}