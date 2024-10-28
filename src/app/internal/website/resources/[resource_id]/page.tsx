import PageHero from '@/components/PageHero'
import { getResourceDetails } from '@/prismic/resources.prismic'
import moment from 'moment'
import React from 'react'
import { PrismicRichText } from '@prismicio/react'

export default async function page(props: any) {
  const details = await getResourceDetails(props.params.resource_id)

  return (
    <>
      <PageHero heading={details.data.name || ''} imageURL={details.data.image.url || undefined} />
      <section className='blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80'>
        <div className="container">
          <div className='row gx-xl-5'>
            <div className='col-lg-8'>
              <article className='blog-meta-two style-two'>
                <figure className="post-img position-relative d-flex align-items-end m0" style={{ backgroundImage: `url(${details.data.image.url})` }}>
                  <div className="date">
                    {moment(details.first_publication_date).format('DD MMM YYYY')}
                  </div>
                </figure>
                <div className='post-data'>
                  {/* <div className="post-info">Aslmia Uddin . 7 min . Banking </div> */}
                  <div className="blog-title"><h3>
                    {details.data.name}
                    </h3></div>
                  <div className='post-details-meta'>
                    <PrismicRichText field={details.data.content} />
                  </div>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-md-8'></div>
          </div>
        </div>
      </section>
    </>
  )
}