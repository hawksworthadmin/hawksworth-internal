import { getPersonByUID } from '@/prismic/people.prismic'
import React from 'react'

export default async function page(props: any) {
    const person = await getPersonByUID(props.params.person_id);

    return (
        <>
            <div className="bg-primary text-white inner-banner-two light-bg text-center pt-200 md-pt-150 pb-85 lg-pb-50 position-relative">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 m-auto">
                            <ul className="text-white style-none d-inline-flex justify-content-center pager">
                                <li><a href="index-2.html">Home</a></li>
                                <li>/</li>
                                <li><a href="#">Pages</a></li>
                                <li>/</li>
                                <li>Team</li>
                            </ul>
                            <h1 className="hero-heading text-white">Single Team Details</h1>
                            <p className="text-lg">Find the team members details here with all the information</p>
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
                                    <div className="post">Founder &amp; CEO</div>
                                    <h6 className="fw-bold">About {person.data.full_name?.split(' ')[0]}.</h6>
                                    {/* @ts-ignore */}
                                    <p>The bio of the person goes here</p>
                                    <div className="social-share pt-35">
                                        <ul className="style-none d-flex align-items-center">
                                            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
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
                                            <td>Spain, Barcelona</td>
                                        </tr>
                                            <tr>
                                                <td>Position:</td>
                                                <td>Founder &amp; CEO</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>mathfir@support.com</td>
                                            </tr>
                                            <tr>
                                                <td>Phone Number:</td>
                                                <td>{person.data.phone_number}</td>
                                            </tr>
                                            <tr>
                                                <td>Qualification:</td>
                                                <td>Master Degree</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td>Male</td>
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
