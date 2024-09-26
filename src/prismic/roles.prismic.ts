import { prismicClient } from "./index.prismic";

export async function getAllRoles(){
    const latestBlogPosts = await prismicClient.getAllByType('roles', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'roles'] },
        },
        limit: 20,
        orderings: [
            {
                field: 'my.roles.published_on',
                direction: 'desc',
            },
        ],
    });
    return latestBlogPosts;
}
