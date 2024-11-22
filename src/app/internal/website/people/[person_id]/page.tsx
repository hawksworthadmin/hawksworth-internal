import { getPersonByUID } from '@/prismic/people.prismic'
import React from 'react'
import {PrismicRichText} from "@prismicio/react";

export default async function page(props: any) {
    const person = await getPersonByUID(props.params.person_id);

    return (
        <>
            <div className="bg-primary text-white inner-banner-two light-bg text-center pt-200 md-pt-150 pb-85 lg-pb-50 position-relative">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 m-auto">
                            {/*<ul className="text-white style-none d-inline-flex justify-content-center pager">*/}
                            {/*    <li><a href="index-2.html">Home</a></li>*/}
                            {/*    <li>/</li>*/}
                            {/*    <li><a href="#">Pages</a></li>*/}
                            {/*    <li>/</li>*/}
                            {/*    <li>Team</li>*/}
                            {/*</ul>*/}
                            <h1 className="hero-heading text-white">
                                {person.data.full_name}
                            </h1>
                            {/*<p className="text-lg">Find the team members details here with all the information</p>*/}
                        </div>
                    </div>
                </div>
                <img src="/template/images/assets/ils_01.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="/template/images/assets/ils_02.svg" alt="" className="lazy-img shapes shape_02" />
                <img src="/template/images/shape/shape_05.svg" alt="" className="lazy-img shapes shape_03" />
                <img src="/template/images/shape/shape_05.svg" alt="" className="lazy-img shapes shape_04" />
            </div>


            <div className="team-details light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80 shadow" style={{ background: '#fefee8' }}>
                <div className="container">
                    <div className="bg-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="member-img" style={{ backgroundImage: `url(${person.data.image.url})` }}></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                                    <h2 className="name fw-bold">
                                        {person.data.full_name}
                                    </h2>
                                    <div className="post">
                                        {/*@ts-ignore*/}
                                        {person.data.role?.slug?.replaceAll('-', ' ')}
                                    </div>
                                    <h6 className="fw-bold">About {person.data.full_name?.split(' ')[0]}.</h6>
                                    {/* @ts-ignore */}
                                    <div>
                                        <PrismicRichText field={person.data.biography} />
                                    </div>
                                    <div className="social-share pt-35">
                                        <ul className="style-none d-flex align-items-center">
                                            {
                                                person.data.linkedin_url &&
                                                <li><a href={person.data.linkedin_url}><i
                                                    className="bi bi-linkedin"></i></a>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-0 pe-3">
                                    <h3>Details</h3>
                                    <table className="w-100 mt-25 lg-mt-20">
                                        <tbody><tr>
                                            <td>Location:</td>
                                            <td>{person.data.location}</td>
                                        </tr>
                                            <tr>
                                                <td>Position:</td>
                                                {/*@ts-ignore*/}
                                                <td>{person.data.role?.slug?.replaceAll('-', ' ')}</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{person.data.email || "N/A"}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone Number:</td>
                                                <td>{person.data.phone_number}</td>
                                            </tr>
                                            {/*<tr>*/}
                                            {/*    <td>Qualification:</td>*/}
                                            {/*    <td>Master Degree</td>*/}
                                            {/*</tr>*/}
                                            <tr>
                                                <td>Gender:</td>
                                                <td>{person.data.gender || 'N/A'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
