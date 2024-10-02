import React from 'react'
import { PeopleDocument, RolesDocument } from '../../../../../prismicio-types'
import EachPerson from './(component)/EachPerson'
import { getPeople } from '@/prismic/people.prismic';

type Props = {
    role: RolesDocument;
}

export default async function PeopleList({ role }: Props) {

    const people = await getPeople(4)

    return (
        <>
            <div className="row">
                {
                    people.map((person: PeopleDocument) => {
                        return <EachPerson key={person.uid} person={person} />
                    })
                }
            </div>
        </>
    )
}