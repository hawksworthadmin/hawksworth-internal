import { prismicClient } from "./index.prismic";

export async function getAllOffices(){
    const latestOffices = await prismicClient.getAllByType('offices', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'offices'] },
        },
        limit: 20,
        orderings: [
            {
                field: 'my.offices.published_on',
                direction: 'desc',
            },
        ],
    });
    return latestOffices;
}
