import { contactDetails } from '@/lib/constants';
import moment from 'moment';
import React from 'react'

type Props = {
    others: {
        title: string;
        imageURL: string;
        route: string;
        createdAt: string;
    }[]
}

export default function ArticleRight({ others }: Props) {
    return (
        <>
            <div className="blog-sidebar md-mt-80 ps-xxl-4">
                {/* <form action="#" className="sidebar-search">
                    <input type="text" placeholder="Search.."/>
                        <button className="tran3s"><i className="bi bi-search"></i></button>
                </form>
                <div className="blog-category mt-60 lg-mt-40">
                    <h3 className="sidebar-title">Category</h3>
                    <ul className="style-none">
                        <li><a href="#">Digital <span>(3)</span></a></li>
                        <li><a href="#">Marketing <span>(4)</span></a></li>
                        <li><a href="#">Consultation <span>(8)</span></a></li>
                        <li><a href="#">Payments <span>(5)</span></a></li>
                        <li><a href="#">Banking <span>(7)</span></a></li>
                    </ul>
                </div> */}
                <div className="blog-recent-news lg-mt-40">
                    <h3 className="sidebar-title">More</h3>
                    {
                        others.map((post, index) => {
                            return <article className="recent-news" key={`others-${index}`}>
                                <figure className="post-img" style={{ backgroundImage: `url(${post.imageURL})` }}>
                                </figure>
                                <div className="post-data">
                                    <div className="date">
                                        {moment(post.createdAt).format('Do MMMM YYYY')}
                                    </div>
                                    <a href={post.route} className="blog-title">
                                        <h3>
                                            {post.title}
                                        </h3>
                                    </a>
                                </div>
                            </article>
                        })
                    }
                </div>

                {/* <div className="blog-keyword mt-60 lg-mt-40">
                    <h3 className="sidebar-title">Keywords</h3>
                    <ul className="style-none d-flex flex-wrap">
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Online Banking</a></li>
                        <li><a href="#">Consultation</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Cards</a></li>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Loan</a></li>
                    </ul>
                </div> */}
                <div className="contact-banner text-center mt-50 lg-mt-30">
                    <h3 className="mb-20">Any Questions? <br />Let’s talk</h3>
                    <a href={`mailto:${contactDetails.hrEmail}`} className="tran3s fw-500">Let’s Talk</a>
                </div>
            </div>
        </>
    )
}