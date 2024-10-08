
import React from 'react'
import { PeopleDocument, RolesDocument } from '../../../../../prismicio-types'
import { getPeopleByRole } from '@/prismic/people.prismic';
import EachPerson from './(component)/EachPerson';

type Props = {
    role: RolesDocument;
}

export default async function PeopleList({ role }: Props) {

    const people = await getPeopleByRole({
        limit: 4,
        role_id: role.id
    })

    // console.log('THE PEOPLE::', people)

    return (
        <>
            <div className="row">
                {
                    people && people.results.map((person: PeopleDocument) => {
                        return <EachPerson key={person.uid} person={person} />
                    })
                }
            </div>
        </>
    )
}