import React from 'react'

type Props = {
    children: any;
}

export default function Container({ children }: Props) {
    return (
        <div className='mx-auto xl:w-[70rem] md:w-[95vw] p-default flex flex-col'>
            {children}
        </div>
    )
}