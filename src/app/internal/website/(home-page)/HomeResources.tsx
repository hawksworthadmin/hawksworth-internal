import EachResource from '@/components/EachResource'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function HomeResources() {
    return (
        <>
            <section className=' blog-section-two position-relative mt-150 lg-mt-80 pb-130 lg-pb-80'>
                <div className='container'>
                    <div className='position-relative'>
                        <div className="title-two mb-30 lg-mb-10">
                            <h2 className="text-dark">Resources</h2>
                        </div>
                        <div className="section-btn sm-mt-60" style={{ position: 'absolute', right: 0 }}>
                            <a href="blog-v1.html" className="btn-seven d-inline-flex align-items-center">
                                <span className="text">See all</span>
                                <div className="icon tran3s rounded-circle d-flex align-items-center">
                                    <BsArrowRight className="lazy-img text-white" size={25} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='row gx-xl-5'>
                        <EachResource />
                        <EachResource />
                    </div>


                </div>
            </section>
        </>
    )
}
