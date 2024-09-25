import { ArticlesDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";


export async function getArticles(): Promise<ArticlesDocument<string>[]>{
    const latestBlogPosts = await prismicClient.getAllByType('articles', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'latest_articles'] },
        },
        fetchLinks: ['author.fullname'],
        limit: 3,
        graphQuery: `{
            articles{
                title
                short_description
                author
                image
            }
        }`,
        orderings: [
            {
                field: 'my.articles.published_on',
                direction: 'desc',
            },
        ],
    })

    return latestBlogPosts;
}

export async function getArticleDetails(uid: string):Promise<ArticlesDocument<string>>{
    const article = await prismicClient.getByUID('articles', uid);
    return article;
}
