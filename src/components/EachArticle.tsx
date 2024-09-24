import Link from 'next/link'
import React from 'react'

type Props = {}

export default function EachArticle({ }: Props) {
    let link = `/internal/website/articles/article-slug`
    return (
        <>
            <div className="col-md-6">
                <article className="blog-meta-one mt-35 sm-mt-30 wow fadeInUp" style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                    <div className="post-data">
                        <div className="post-info"><span className="fw-500 text-dark">Rashed Ka -</span> 18 Jul 2023</div>
                        <a href={link} className="mt-15"><h4 className="tran3s blog-title">Wise Spending Habits, 13 Tips for Maximizing Your Money.</h4></a>
                    </div>
                    <figure className="post-img position-relative d-flex justify-content-end align-items-end m0" style={{ backgroundImage: 'url(/template/images/blog/blog_img_01.jpg)' }}>
                        <Link href={link} className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                    </figure>
                </article>
            </div>
        </>
    )
}