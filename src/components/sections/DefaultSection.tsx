import React from 'react'

type Props = {
    children: any;
    heading?: string;
    subHeading?: string;
}

export default function DefaultSection({ children, heading, subHeading }: Props) {
    return (
        <section className='flex flex-col gap-default_lg py-default_lg'>
            <div className='flex flex-col gap-default'>
                {heading && <h2 className='text-2xl font-bold'>{heading}</h2>}
                {subHeading && <p>{subHeading}</p>}
            </div>
            {children}
        </section>
    )
}