import EachArticle from '@/components/EachArticle'
import PageHero from '@/components/PageHero'
import { getArticles } from '@/prismic/articles.prismic'
import React from 'react'

export default async function page() {
    const articles = await getArticles(20)

    return (
        <>
            <PageHero heading='New Letter' imageURL='https://media.istockphoto.com/id/1455029793/photo/newspaper-or-hournal-with-news-printing-on-a-printing-machine-in-a-typography.jpg?s=612x612&w=0&k=20&c=CWyORGYaFgEKOnr617iitOO2kAhuNPnXk9_khVmxhc4=' />
            <div className='blog-section-one'>
                <section className='blog-details blog-section-one position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
                    <div className="container">
                        <div className='row gx-xl-5'>
                            {
                                articles.map(article => {
                                    return <EachArticle key={article.uid} report={article} />
                                })
                            }

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
