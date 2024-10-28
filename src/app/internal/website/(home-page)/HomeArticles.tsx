import EachArticle from '@/components/EachArticle'
import Link from 'next/link'
import React from 'react'
import { ArticlesDocument } from '../../../../../prismicio-types'

type Props = {
    articles: ArticlesDocument<string>[]
}

export default function HomeArticles({ articles }: Props) {
    return (
        <>
            <section className='blog-section-one position-relative mt-150 mb-150 lg-mb-80 lg-mt-80 pb-120 pt-120 lg-pb-80 lg-pt-80'>
                <div className="container">
                    <div className='position-relative'>
                        <div className="title-one mb-20 lg-mb-10">
                            <h2>News Letter.</h2>
                        </div>

                        <p className="text-lg mb-40 lg-mb-10">Get the latest news at the firm.</p>


                        <div className='row gx-xxl-5'>
                            {
                                articles.map((article, index) => {
                                    return <EachArticle
                                        key={`article-${index}`}
                                        report={article}
                                    />
                                })
                            }
                        </div>


                        <div className="section-btn sm-mt-40">
                            <Link href="/internal/website/articles" className="btn-five icon-link">
                                <span className="text">See all</span>
                                <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-right"></i></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}