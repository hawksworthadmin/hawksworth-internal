import React from 'react'
import { ResourcesDocument } from '../../prismicio-types'
import moment from 'moment';
import { PrismicText } from '@prismicio/react'
import Link from 'next/link';


type Props = {
    data: ResourcesDocument;
}

export default function EachResource({ data }: Props) {
    let link = `/internal/website/resources/${data.uid}`

    return (
        <>
            <div className="col-md-6">
                <article className="blog-meta-two mt-35 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <figure className="post-img position-relative d-flex align-items-end m0 border-30" style={{ backgroundImage: `url(${data.data.image.url})` }}>
                        <span className="stretched-link date tran3s">
                            {moment(data.first_publication_date).format('DD MMM YYYY')}
                        </span>
                    </figure>
                    <div className="post-data">
                        <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                            <Link href={link} className="blog-title"><h4>{data.data.name}</h4></Link>
                            <Link href={link} className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                        <div className="post-info">
                            <PrismicText field={data.data.about} />
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}