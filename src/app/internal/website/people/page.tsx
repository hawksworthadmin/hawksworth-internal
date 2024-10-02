import PageHero from '@/components/PageHero'
import React from 'react'
import EachPerson from './(component)/EachPerson'
import { PeopleDocument } from '../../../../../prismicio-types';
import { getRolesByOffice } from '@/prismic/roles.prismic';
import PeopleList from './PeopleList';

export default async function page(props: any) {
    // console.log('THE PROPS:::', props)
    // props.searchParams.office

    const allRoles = await getRolesByOffice(props.searchParams.office);
    console.log('ALL ROLES:: ', allRoles.map(val => val.data), props.searchParams.office);

    return (
        <>
            <PageHero />
            <>
            {
                allRoles.map((role, i) => {
                    return <section key={`role-${i}`} className='team-section-one mt-150 lg-mt-80 mb-100 lg-mb-40'>
                        <div className="container">
                            <div className='position-relative'>
                                <div className="title-one mb-30 lg-mb-10">
                                    <h2>{role.data.name}</h2>
                                </div>
                                <PeopleList role={role} />
                                <div className="section-btn sm-mt-60">
                                    <a href="blog-v1.html" className="btn-seven d-inline-flex align-items-center">
                                        <span className="text">See all blogs</span>
                                        <div className="icon tran3s rounded-circle d-flex align-items-center">
                                            <img src="images/lazy.svg" data-src="images/icon/icon_27.svg" alt="" className="lazy-img" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                })
            }
            </>
        </>
    )
}
