import PageHeroSimple from '@/components/PageHeroSimple'
import { getEventDetails } from '@/prismic/events.prismic'
import { PrismicRichText } from '@prismicio/react';
import moment from 'moment';
import React from 'react'

export default async function page(props:any) {

    const event = await getEventDetails(props.params.event_id);

    return (
        <>
            <PageHeroSimple heading={event?.data?.name || ''} imageURL={event?.data?.image?.url || ''} />
            <div className='project-details-one position-relative pb-150- lg-pb-80-'>
                <div className="project-info position-relative mb-150 lg-mb-80">
                    <div className="inner-wrapper m-auto">
                        <div className="d-lg-flex align-items-center">
                            <h3><span>Details</span></h3>
                            <ul className="style-none d-md-flex flex-fill ps-lg-5">
                                <li className="d-flex">
                                    <img src="images/icon/icon_85.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Date</div>
                                        <span>
                                            {moment(event.data.date_and_time).format('Do MMMM YYYY')}
                                        </span>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <img src="images/icon/icon_86.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Time</div>
                                        <span>
                                            {moment(event.data.date_and_time).format('hh:mm A')}
                                        </span>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <img src="images/icon/icon_87.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Location</div>
                                        <span>
                                            {event.data.location}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container pb-150 lg-pb-80'>
                <div>
                    <div className="upper-title">overview</div>
                    <h2>Event Overview.</h2>
                </div>
                <PrismicRichText field={event.data.about_the_event} />

            </div>
        </>
    )
}
