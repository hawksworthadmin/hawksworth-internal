import PageHero from '@/components/PageHero'
import React from 'react'
import HomeAbout from '../(home-page)/HomeAbout'

export default function page() {
    return (
        <>
            <PageHero heading='About Us' />
            <HomeAbout />
            <div className='p-5 text-center mt-5'>
                <h1>More Coming Soon!!</h1>
            </div>
        </>
    )
}
