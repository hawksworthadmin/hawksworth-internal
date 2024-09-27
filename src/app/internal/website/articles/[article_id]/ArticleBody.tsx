'use client'
import { PrismicRichText } from '@prismicio/react'
import React, { useEffect, useState } from 'react'
import { ArticlesDocument } from '../../../../../../prismicio-types'
import { RichTextField } from '@prismicio/client'
import { useAppContext } from '@/context/app.context'

type Props = {
    details: ArticlesDocument<string>
}

export default function ArticleBody({ details }: Props) {
    const { user } = useAppContext();
    const [personalizedContent, setPersonalizedContent] = useState<RichTextField | null>(null)

    function replacePlaceholdersInContent(content: RichTextField, firstName: string | null, lastName: string | null) {
        return content.map((block:any) => {
            if (block?.text) {
                return {
                    ...block,
                    text: block.text
                        .replace(/{{first_name}}/g, firstName || '')
                        .replace(/{{ first_name }}/g, firstName || '')
                        .replace(/{{last_name}}/g, lastName || '')
                        .replace(/{{ last_name }}/g, lastName || '')
                }
            }
            return block
        })
    }


    useEffect(() => {
        if (details?.data?.content && user && user.displayName) {
            const updatedContent = replacePlaceholdersInContent(details.data.content, user.displayName?.split(' ')[0], user.displayName?.split(' ')[1]);
            setPersonalizedContent(updatedContent as any);
        }

    }, [user, details])
    
    return (
        <>
            <div className='col-lg-8'>
                <article className='blog-meta-two style-two'>
                    <figure className="post-img position-relative d-flex align-items-end m0" style={{ backgroundImage: `url(${details?.data?.image.url})` }}>
                        <div className="date">10 JUN</div>
                    </figure>

                    <div className='post-data'>
                        <div className="post-info">Aslmia Uddin . 7 min . Banking </div>
                        <div className="blog-title"><h4>{details?.data?.title}</h4></div>
                        <div className='post-details-meta'>
                            <PrismicRichText field={personalizedContent} />
                            {/* <PrismicText field={personalizedContent} /> */}
                        </div>
                    </div>

                </article>
            </div>
        </>
    )
}