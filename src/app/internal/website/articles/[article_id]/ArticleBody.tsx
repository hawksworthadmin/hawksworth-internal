'use client'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import React, { useEffect, useState } from 'react'
import { ArticlesDocument } from '../../../../../../prismicio-types'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { RichTextField, RTEmbedNode, RTImageNode } from '@prismicio/client'

type Props = {
    details: ArticlesDocument<string>
}

export default function ArticleBody({ details }: Props) {
    const [first_name, setFirstName] = useState<string | null>(null)
    const [last_name, setLastName] = useState<string | null>(null)
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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Current user:", user);
                setFirstName(user?.displayName?.split(' ')[0] || null)
                setLastName(user?.displayName?.split(' ')[1] || null)
            } else {
                console.log("No user signed in");
            }
        });
    }, [])

    useEffect(() => {
        if (details?.data?.content && first_name && last_name) {
            const updatedContent = replacePlaceholdersInContent(details.data.content, first_name, last_name);
            console.log('THE CONTENT:::', updatedContent)
            setPersonalizedContent(updatedContent as any);
        }
    }, [first_name, last_name, details])
    
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