'use client'
import Link from 'next/link'
import React from 'react'
import { PeopleDocument } from '../../../../../../prismicio-types'

type Props = {
    person: PeopleDocument;
}

export default function EachPerson({ person }: Props) {
    const link = `/internal/website/people/${person.uid}`
    return (
        <>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" style={{ visibility: `visible`, animationName: "fadeInUp" }}>
                <div className="card-style-four mb-50 lg-mb-40">
                    <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                        <img src={person?.data?.image?.url || ''} alt="" className="lazy-img w-100" />
                        <Link href={link} className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"><i className="bi bi-arrow-up-right"></i></Link>
                    </div>
                    <h4 className="fw-500 pt-20 m0">{person.data.full_name}</h4>
                    <div className="fs-6">
                        {/* @ts-ignore */}
                        {person.data.role['slug']}
                    </div>
                </div>
            </div>
        </>
    )
}