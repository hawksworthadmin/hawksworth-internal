'use client'
import { useAppContext } from '@/context/app.context'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function HomeHero() {
    const { user } = useAppContext();
    const [time, settime] = useState('');

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return 'Good Morning';
        } else if (hour < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };


    // const subHeadings = [
    //     `Top of the ${time} to you! Have a beautiful ${time}`,
    //     `Go for it! You already ave what it takes.`,
    //     `Remember that help is available. To those who ask, Ask away!`,
    //     `Breathe in, breathe out. It's another day. It too shall pass.`,
    //     `Share some love today. Spread that your beautiful smile.`,
    //     `Celebrate peace! Remember to to drink water too.`,
    //     `Did you remember to give your system some`
    // ]

    // const randomSubHeading = () => {
    //     return Math.floor(Math.random() * subHeadings.length);
    // }

    // useEffect(() => {

    // },[])


    return (
        <>
            <section className='hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative d-flex align-items-center' style={{ minHeight: '100vh'}}>
                <div className='hero-slider-one m0 slick-initialized slick-slider'>
                    <div className='slick-list draggable'>
                        <div className='slick-track' style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/027/105/424/large_2x/blue-wall-in-home-office-for-mockup-or-copy-space-free-photo.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                        </div>
                    </div>
                </div >
                <div className='container position-relative'>
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 ms-auto">
                            <h2 className='text-white d-inline-block position-relative wow fadeInUp'>{getGreeting()}</h2> <br />
                            <h1 className="hero-heading- text-white d-inline-block position-relative wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                {user && user?.displayName && user?.displayName.split(' ')[0] || ''}
                            </h1>
                            <p className="text-xl text-white pt-35 pb-25 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>Empowering businesses with innovative strategies and actionable recommendations</p>
                            <a href="contact.html" className="btn-two icon-link wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <span>Let’s Talk</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Link href={'/internal/website/about'} className='more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft' style={{ visibility: "visible", animationName: "fadeInLeft" }}></Link>
            </section >
        </>
    )
}
