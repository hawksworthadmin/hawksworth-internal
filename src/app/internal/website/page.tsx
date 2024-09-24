import React from 'react'
import HomeHero from './(home-page)/HomeHero'
import HomeAbout from './(home-page)/HomeAbout'
import HomeResources from './(home-page)/HomeResources'
import HRCTA from '@/components/HRCTA'
import HomeFAQ from './(home-page)/HomeFAQ'

export default function page() {
    return (
        <>
            <HomeHero />
            <HomeAbout />
            <HomeResources />
            <HomeFAQ />
            <HRCTA />
        </>
    )
}
