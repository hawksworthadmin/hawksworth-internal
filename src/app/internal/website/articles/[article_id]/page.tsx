import React from 'react'
import ArticleHero from './ArticleHero'
import ArticleRight from './ArticleRight'

export default function page() {
    return (
        <>
            <ArticleHero />
            <div className='blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
                <div className="container">
                    <div className='row gx-xl-5'>
                        <div className='col-lg-8'>
                            <article className='blog-meta-two style-two'>
                                <figure className="post-img position-relative d-flex align-items-end m0" style={{ backgroundImage: `url(/template/images/blog/blog_img_08.jpg)` }}>
                                    <div className="date">10 JUN</div>
                                </figure>

                                <div className='post-data'>
                                    <div className="post-info">Aslmia Uddin . 7 min . Banking </div>
                                    <div className="blog-title"><h4>Manage your Online Banking &amp; Get Rewarded</h4></div>
                                    <div className='post-details-meta'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet ipsa reiciendis libero repudiandae nam explicabo distinctio, omnis error eaque repellat doloremque rerum quibusdam provident? Porro natus officia consequatur itaque.</p>
                                    </div>
                                </div>

                            </article>
                        </div>
                        <div className='col-lg-4 col-md-8'>
                            <ArticleRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
