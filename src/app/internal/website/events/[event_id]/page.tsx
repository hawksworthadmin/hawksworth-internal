import PageHeroSimple from '@/components/PageHeroSimple'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHeroSimple />
            <div className='project-details-one position-relative pb-150- lg-pb-80-'>
                <div className="project-info position-relative mb-150 lg-mb-80">
                    <div className="inner-wrapper m-auto">
                        <div className="d-lg-flex align-items-center">
                            <h3>Project <span>Details</span></h3>
                            <ul className="style-none d-md-flex flex-fill ps-lg-5">
                                <li className="d-flex">
                                    <img src="images/icon/icon_85.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Date</div>
                                        <span>23 July, 2022</span>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <img src="images/icon/icon_86.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Client Name</div>
                                        <span>Mariona Adisson, USA</span>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <img src="images/icon/icon_87.svg" alt="" className="lazy-img icon" />
                                    <div className="ps-4">
                                        <div className="text1">Project Type</div>
                                        <span>Business Consulting</span>
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
                    <h2>Project Overview.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured.</p>

            </div>
        </>
    )
}
