'use client'
import DefaultSection from '@/components/sections/DefaultSection'
import React from 'react'
import { TeamsDocument } from '../../../prismicio-types';
import { HiArrowSmallRight } from 'react-icons/hi2';

type Props = {
    roles: TeamsDocument[];
}

export default function HomeRoles({ roles }: Props) {
    return (
        <DefaultSection heading='Our People'>
            <div className='grid grid-cols-3 gap-default'>
                {
                    roles.map((role, i) => {
                        return <EachHomeRoles key={i} role={role} />
                    })
                }
            </div>
        </DefaultSection>
    )
}

const EachHomeRoles = ({ role }: { role: TeamsDocument }) => {
    return (
        <div className='flex items-center justify-between truncate border-border border rounded-xl p-default bg-card text-card-foreground hover:shadow-sm'>
            <p className='truncate'>{role.data?.name}</p>
            <div>
                <HiArrowSmallRight />
            </div>
        </div>
    )
}
