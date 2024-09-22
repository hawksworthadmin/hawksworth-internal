import prismicClient from "./client.prismic"

export const getRecentTeams = async () => {
    const latestTeams = await prismicClient.getAllByType('teams', {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'teams'] },
        },
        limit: 20,
        orderings: [
            {
                field: 'my.teams.published_on',
                direction: 'desc',
            },
        ],
    })

    return latestTeams
}
