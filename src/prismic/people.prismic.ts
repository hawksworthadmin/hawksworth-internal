import { PeopleDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";


export async function getPeople(limit?: number): Promise<PeopleDocument<string>[]> {
    const latestPeople = await prismicClient.getAllByType('people', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'people'] },
        },
        fetchLinks: ['role.name'],
        limit: limit || 4,
        graphQuery: `{
            people{
                full_name
                image
                role
            }
        }`,
        orderings: [
            {
                field: 'my.people.published_on',
                direction: 'desc',
            },
        ],
    })

    return latestPeople;
}

export async function getPersonByUID(uid: string): Promise<PeopleDocument<string>> {
    const article = await prismicClient.getByUID('people', uid);
    return article;
}
