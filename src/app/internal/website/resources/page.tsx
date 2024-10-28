import EachResource from '@/components/EachResource'
import PageHero from '@/components/PageHero'
import { getLatestResources } from '@/prismic/resources.prismic'
import React from 'react'

type Props = {}

export default async function page({ }: Props) {
    const resources = await getLatestResources()
    return (
        <>
            <PageHero heading='Resources' breadcrumbs={[
                {
                    label: "Home",
                    link: '/'
                },
                {
                    label: "Resources"
                }
            ]}
                imageURL='https://www.governmentsupplyservices.com/img/office-supplies.jpg'
             />
            <section className='blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
                <div className="container">
                    <div className="row">
                        {
                            resources.results.map(resource => {
                                return <EachResource key={resource.id} data={resource} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}