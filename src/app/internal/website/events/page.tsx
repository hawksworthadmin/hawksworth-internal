import PageHero from '@/components/PageHero'
import React from 'react'
import EachEvent from './components/EachEvent'
import { getEvents } from '@/prismic/events.prismic'

type Props = {}

export default async function page({ }: Props) {

    const allEvents = await getEvents()

    return (
        <>
            <PageHero heading='Events' subHeading="Don't miss out, these are the upcoming events we have" imageURL='https://t4.ftcdn.net/jpg/07/94/71/53/360_F_794715394_lxaJ9jc6A467VRi94zmVqq6tSwHS9m0q.jpg' />
            <section className='portfolio-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-60'>
                <div className="container">
                    <div className='column-two- row'>
                        {
                            allEvents.map(event => {
                                return <EachEvent key={event.uid} event={event} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}