import EachArticle from '@/components/EachArticle'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function HomeArticles({ }: Props) {
    return (
        <>
            <section className='blog-section-one position-relative mt-150 mb-150 lg-mb-80 lg-mt-80 pb-120 pt-120 lg-pb-80 lg-pt-80'>
                <div className="container">
                    <div className='position-relative'>
                        <div className="title-one mb-20 lg-mb-10">
                            <h2>Latest Articles.</h2>
                        </div>

                        <p className="text-lg mb-40 lg-mb-10">Get the latest update, trips &amp; tricks from our expert.</p>


                        <div className='row gx-xxl-5'>
                            <EachArticle />
                            <EachArticle />
                        </div>


                        <div className="section-btn sm-mt-40">
                            <Link href="/internal/website/articles" className="btn-five icon-link">
                                <span className="text">See all blogs</span>
                                <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-right"></i></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}