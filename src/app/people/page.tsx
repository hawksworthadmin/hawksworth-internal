import Container from '@/components/layout/Container'
import DefaultHeader from '@/components/layout/DefaultHeader'
import React from 'react'
import HomeHero from '../(home-page)/HomeHero'

export default function page() {
    return (
        <>
            <Container>
                <div className='flex flex-col gap-default'>
                    <DefaultHeader />
                    <HomeHero />
                </div>
            </Container>
        </>
    )
}
