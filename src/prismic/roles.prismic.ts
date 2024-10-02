import { RolesDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";
import * as prismic from '@prismicio/client';

export const getRolesByOffice = async (officeUid: string[]): Promise<RolesDocument[]> => {
    const latestRoles = await prismicClient.getAllByType('roles', {
        // filters: [prismic.filter.at('my.roles.office', officeUid)],
        fetchLinks: ['office.name'],
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
    })

    return latestRoles
}