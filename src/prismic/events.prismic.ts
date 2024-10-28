import { EventsDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";


export async function getEvents(): Promise<EventsDocument<string>[]>{
    return await prismicClient.getAllByType('events', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'latest_event'] },
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
