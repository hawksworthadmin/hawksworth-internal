import DefaultCard from '@/components/cards/DefaultCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function HomeHero() {
    return (
        <>
            <DefaultCard className='md:py-default_xl py-default_lg rounded-xl border-border border md:min-h-[30rem] flex items-center justify-center bg-[url(https://static.vecteezy.com/system/resources/previews/006/327/095/non_2x/dark-blue-gradient-colors-abstract-blurred-background-for-landing-page-free-vector.jpg)]'>
                <div className='flex flex-col gap-default_xl items-center'>
                    <div className='flex flex-col gap-default justify-center items-center'>
                        <p className='text-xl text-white font-normal text-center'>Welcome to</p>
                        <h1 className='md:text-h1 text-4xl text-white font-bold text-center'>The Hawksworth Group</h1>
                    </div>
                    <Link href={`/people`}>
                        <Button size='lg' variant={'outline'}>Meet The People</Button>
                    </Link>
                </div>
            </DefaultCard>
        </>
    )
}
