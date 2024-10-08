import Link from 'next/link';
import React from 'react'

type Props = {}

export default function EachEvent({ }: Props) {
    const url = "/internal/website/events/event-slug";
    return (
        <>
            <div className="isotop-item col-12 col-md-6"
                // style={{ position: `absolute`, left: `0%`, top: `0px` }}
            >
                <div className="portfolio-block-one mb-60 lg-mb-40" >
                    <div className="img-holder round-border" >
                        <img src="/template/images/gallery/img_11.jpg" alt="" className="img-meta w-100 tran5s" />
                        <Link className="fancybox expend d-flex align-items-center justify-content-center tran3s" data-fancybox="" title="Click for large view" href={url} tabIndex={0} ><i className="bi bi-plus"></i></Link>
                    </div>
                    <div className="caption" >
                        <div className="d-flex align-items-center justify-content-between" >
                            <div >
                                <ul className="style-none d-flex tag">
                                    <li>PRINT</li>
                                    <li>DESIGN</li>
                                </ul>
                                <h6><Link href={url} className="pj-title">Tax Preparation.</Link></h6>
                            </div>
                            <div >
                                <Link href={url} className="arrow tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}