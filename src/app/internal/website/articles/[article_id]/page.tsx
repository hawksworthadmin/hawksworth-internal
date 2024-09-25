import React from 'react'
import ArticleHero from './ArticleHero'
import ArticleRight from './ArticleRight'
import { getArticleDetails } from '@/prismic/articles.prismic'
import ArticleBody from './ArticleBody';

export default async function page(props:any) {
    const details = await getArticleDetails(props.params.article_id);
    return (
        <>
            <ArticleHero />
            <div className='blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
                <div className="container">
                    <div className='row gx-xl-5'>
                        <ArticleBody details={details} />
                        <div className='col-lg-4 col-md-8'>
                            <ArticleRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
