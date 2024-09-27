import PageHero from '@/components/PageHero'
import React from 'react'
import EachPerson from './(component)/EachPerson'
import { getPeople } from '@/prismic/people.prismic'
import { PeopleDocument } from '../../../../../prismicio-types';

export default async function page(props: any) {
    const people = await getPeople(4);
    return (
        <>
            <PageHero />
            <section className='team-section-one mt-150 lg-mt-80 mb-100 lg-mb-40'>
                <div className="container">
                    <div className='position-relative'>
                        <div className="row">
                            {
                                people.map((person: PeopleDocument) => {
                                    return <EachPerson key={person.uid} person={person} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
