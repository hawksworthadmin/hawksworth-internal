'use client'
import { useAppContext } from '@/context/app.context'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'


export default function HomeHero() {
    const [show, setShow] = useState(false)
    const { user } = useAppContext();

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


    const subHeadings = [
        `Go for it! You already have what it takes.`,
        `Remember that help is available. To those who ask, Ask away!`,
        `Breathe in, breathe out. It's another day. It too shall pass.`,
        `Share some love today. Spread that your beautiful smile.`,
        `Celebrate peace! Remember to to drink water too.`,
        `Did you remember to give your system some rest?`
    ]

    const allCTAs: { label: string; route: string }[] = [
        {
            label: "Check our newsletter",
            route: "/internal/website/blog"
        },
        {
            label: "Check gallery",
            route: '/'
        },
        {
            label: "See latest resources",
            route: '/internal/website/resources'
        }
    ]

    const randomSubHeading = () => {
        return Math.floor(Math.random() * subHeadings.length);
    }

    const randomCTA = () => {
        return Math.floor(Math.random() * allCTAs.length);
    }


    useEffect(() => {
        setShow(true);
    }, [])


    return (
        <>
            <section className='hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative d-flex align-items-center' style={{ minHeight: '100vh' }}>
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
                            {
                                show && <>
                                    <p className="text-xl text-white pt-35 pb-25 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
                                        {subHeadings[randomSubHeading()]}
                                    </p>
                                    {/* <Link href={allCTAs[randomCTA()].route} className="btn-two icon-link wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                        <span>{allCTAs[randomCTA()].label}</span>
                                    </Link> */}
                                </>
                            }
                        </div>
                    </div>
                </div>
                <Link href={'/internal/website/about'} className='more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft' style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                    <HiArrowUpRight />
                </Link>
            </section >
        </>
    )
}
