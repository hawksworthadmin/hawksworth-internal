import React from 'react'

type Props = {}

export default function PageHeroSimple({ }: Props) {
    return (
        <>
            <div className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative" style={{ backgroundImage: `url(/template/images/media/img_26.jpg)` }} >
                <div className="container position-relative" >
                    <div className="row align-items-center" >
                        <div className="col-lg-8 m-auto text-center" >
                            <div className="tag" >Consulting</div>
                            <h1 className="hero-heading no-bg text-white">Tax File Preparation &amp; Consulting</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}