import React from 'react'
import ArticleRight from './ArticleRight'
import { getArticleDetails, getArticles } from '@/prismic/articles.prismic'
import ArticleBody from './ArticleBody';
import PageHero from '@/components/PageHero';

export default async function page(props:any) {
    const details = await getArticleDetails(props.params.article_id);

    const more = await getArticles(4)

    return (
        <>
            <PageHero heading={details.data.title || ''} imageURL={details.data.image.url || ''} />
            <div className='blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
                <div className="container">
                    <div className='row gx-xl-5'>
                        <ArticleBody details={details} />
                        <div className='col-lg-4 col-md-8'>
                            <ArticleRight others={
                                more.filter(x => x.uid != props.params.article_id).map(article => ({
                                    title: article.data.title || '',
                                    createdAt: article.first_publication_date,
                                    imageURL: article.data.image.url || '',
                                    route: `/internal/website/articles/${article.uid}`
                                }))
                            } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
