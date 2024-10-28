import Link from 'next/link';
import React from 'react'
import { EventsDocument } from '../../../../../../prismicio-types';
import moment from 'moment';
import { HiArrowUpRight } from 'react-icons/hi2';

type Props = {
    event: EventsDocument;
}

export default function EachEvent({ event }: Props) {
    const url = `/internal/website/events/${event.uid}`;
    return (
        <>
            <div className="isotop-item col-12 col-md-6"
            // style={{ position: `absolute`, left: `0%`, top: `0px` }}
            >
                <div className="portfolio-block-one mb-60 lg-mb-40" >
                    <div className="img-holder round-border" >
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={event.data.image.url || ''} alt={event.data.image.alt || 'event preview'} className="img-meta w-100 tran5s" />
                        <Link className="fancybox expend d-flex align-items-center justify-content-center tran3s" data-fancybox="" title="Click for large view" href={url} tabIndex={0} >
                            <HiArrowUpRight className='text-white' />
                        </Link>
                    </div>
                    <div className="caption" >
                        <div className="d-flex align-items-center justify-content-between" >
                            <div >
                                <ul className="style-none d-flex tag">
                                    <li>
                                        {moment(event.data.date_and_time).format('Do MMMM YYYY [at] hh:mm A')}
                                    </li>
                                </ul>
                                <h6>
                                    <Link href={url} className="pj-title">
                                    {event.data.name}
                                    </Link>
                                </h6>
                            </div>
                            <div >
                                <Link href={url} className="arrow tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}