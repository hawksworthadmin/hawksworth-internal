import { EventsDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";


export async function getEvents(): Promise<EventsDocument<string>[]>{
    return await prismicClient.getAllByType('events', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'lasted_event'] },
        },
        // fetchLinks: ['author.fullname'],
        limit: 20,
        // graphQuery: `{
        //     articles{
        //         title
        //         short_description
        //         author
        //         image
        //     }
        // }`,
        orderings: [
            {
                field: 'my.articles.published_on',
                direction: 'desc',
            },
        ],
    })

}

export async function getEventDetails(uid: string):Promise<EventsDocument<string>>{
    return await prismicClient.getByUID('events', uid);
}

