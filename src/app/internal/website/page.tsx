import React from 'react'
import HomeHero from './(home-page)/HomeHero'
import HomeAbout from './(home-page)/HomeAbout'
import HomeResources from './(home-page)/HomeResources'
import HRCTA from '@/components/HRCTA'
import HomeFAQ from './(home-page)/HomeFAQ'
import HomeArticles from './(home-page)/HomeArticles'
import { getArticles } from '@/prismic/articles.prismic'
import HomeNumber from './(home-page)/HomeNumber'
import HomeProject from './(home-page)/HomeProject'

export default async function page() {
    const articles = await getArticles();
    
    return (
        <>
            <HomeHero />
            <HomeAbout />
            {/* <HomeNumber /> */}
            {/* <HomeResources /> */}
            {/* <HomeProject /> */}
            {/* <HomeFAQ /> */}
            <HomeArticles articles={articles} />
            <HRCTA />
        </>
    )
}
