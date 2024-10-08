import PageHero from '@/components/PageHero'
import React from 'react'
import EachEvent from './components/EachEvent'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <PageHero heading='Events' />
            <section className='portfolio-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-60'>
                <div className="container">
                    <div className='column-two- row'>
                        <EachEvent />
                        <EachEvent />
                        <EachEvent />
                        <EachEvent />
                    </div>
                </div>
            </section>
        </>
    )
}