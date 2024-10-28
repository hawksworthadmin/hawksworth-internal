'use client'
import Link from 'next/link'
import React from 'react'
import { ArticlesDocument } from '../../prismicio-types';
import moment from 'moment'

type Props = {
    report: ArticlesDocument;
}

export default function EachArticle({ report }: Props) {
    let link = `/internal/website/articles/${report.uid}`
    return (
        <>
            <div className="col-md-6">
                <article className="blog-meta-one mt-35 sm-mt-30 wow fadeInUp" style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                    <div className="post-data">
                        <div className="post-info"><span className="fw-500 text-dark">Published</span> {moment(report.first_publication_date).format('Do MMMM YYYY')}</div>
                        <Link href={link} className="mt-15"><h4 className="tran3s blog-title">{report.data.title}</h4></Link>
                    </div>
                    <figure className="post-img position-relative d-flex justify-content-end align-items-end m0" style={{ backgroundImage: `url(${report.data.image.url})` }}>
                        <Link href={link} className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                    </figure>
                </article>
            </div>
        </>
    )
}