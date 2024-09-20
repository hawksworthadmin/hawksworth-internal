'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type Props = {}

export default function DefaultHeader({ }: Props) {
    const pathname = usePathname();

    const links: { label: string; route: string; } = [
        {
            label: 'Home',
            route: '/',
        },
        {
            label: 'Jobs',
            route: '/jobs',
        },
        {
            label: 'People',
            route: '/people',
        },
        {
            label: 'Events',
            route: '/events',
        },
    ]

    return (
        <div className='top-0 sticky bg-card rounded-xl shadow-sm border-border border p-default_lg flex items-center justify-between'>
            <Link href='/'>
                <img className='hidden md:visible md:block' src='/logo.png' alt='brand' width={140} />
                <img className='md:hidden md:' src='/icon.png' alt='brand' width={40} />
            </Link>
            <div className='flex items-center gap-default_lg md:gap-default_xl'>
                {
                    links.map((nav, i: number) => {
                        return <EachNavLink key={`nav-${i}`} label={nav.label} isActive={pathname.includes(nav.route)} route={nav.route} />
                    })
                }
            </div>
        </div>
    )
}

const EachNavLink = ({ label, isActive, route }: { label: string; isActive?: boolean; route:string; }) => {
    return <Link href={route} className={cn('hover:text-primary', {
        'text-primary font-semibold': isActive,
    })}>
        {label}
    </Link>
}
