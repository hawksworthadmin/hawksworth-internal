import { PeopleDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";
import * as prismic from '@prismicio/client';


export async function getPeopleByRole({ limit, role_id }: { role_id: string; limit: number }) {
    let recentBlogPosts = await prismicClient.getByType('people', {
        filters: [
            prismic.filter.at('my.people.role', role_id),
        ],
        fetchLinks: ['role.name'],
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        pageSize: 6,
    });

    return recentBlogPosts
}


export async function getPersonByUID(uid: string): Promise<PeopleDocument<string>> {
    const person = await prismicClient.getByUID('people', uid, {
        fetchLinks: ['roles.name', 'roles.uid']
    });
    return person;
}