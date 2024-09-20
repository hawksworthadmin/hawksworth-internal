'use client'
import DefaultCard from '@/components/cards/DefaultCard'
import DefaultSection from '@/components/sections/DefaultSection'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

type Props = {}

export default function HomePeople({ }: Props) {
    return (
        <DefaultSection heading='Our People'>
            <DefaultCard className='bg-card'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </DefaultCard>
        </DefaultSection>
    )
}