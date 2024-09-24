import React from 'react'

type Props = {}

export default function EachResource({ }: Props) {
    return (
        <>
            <div className="col-md-6">
                <article className="blog-meta-two mt-35 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <figure className="post-img position-relative d-flex align-items-end m0 border-30" style={{ backgroundImage: `url(/template/images/blog/blog_img_03.jpg)`}}>
                        <a href="blog-details.html" className="stretched-link date tran3s">09 FEB</a>
                    </figure>
                    <div className="post-data">
                        <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                            <a href="blog-details.html" className="blog-title"><h4>Spending Habits, 13 Tips for grow Your Money.</h4></a>
                            <a href="blog-details.html" className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></a>
                        </div>
                        <div className="post-info">Rashed Ka . 6 min . Finance </div>
                    </div>
                </article>
            </div>
        </>
    )
}