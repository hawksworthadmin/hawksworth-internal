import DefaultCard from '@/components/cards/DefaultCard'
import DefaultSection from '@/components/sections/DefaultSection'
import React from 'react'

export default function HomeAbout() {
    return (
        <DefaultSection>
            <DefaultCard className='bg-white border-border border shadow-sm p-default_lg'>
                <div className='grid md:grid-cols-2 gap-default_xl grid-col-1'>
                    <div className='md:h-[300px] overflow-hidden rounded-xl'>
                        <img src='https://abstractwallart.com.au/wp-content/uploads/2023/04/Office-with-abstract-canvas-print-on-wall-Warm-Winters-008-900x900.jpg' />
                    </div>
                    <div className='flex flex-col gap-default md:gap-default_lg'>
                        <h2 className='text-h3 font-bold text-foreground'>About Hawksworth</h2>
                        <div className='flex flex-col gap-default'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis. Ea obcaecati nam officiis totam ex sequi molestias, ad unde aut sint culpa provident ipsam? Rerum velit eaque amet maiores.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis. Ea obcaecati nam officiis totam ex sequi molestias, ad unde aut sint culpa provident ipsam? Rerum velit eaque amet maiores.</p>
                        </div>
                    </div>
                </div>
            </DefaultCard>
        </DefaultSection>
    )
}
