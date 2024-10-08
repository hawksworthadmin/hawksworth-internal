import { RolesDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";
import * as prismic from '@prismicio/client';

export const getRolesByOffice = async (office_id: string): Promise<prismic.Query<RolesDocument<string>>> => {
    let theOffice = await prismicClient.getByUID('offices', office_id);

    let officeRoles = await prismicClient.getByType('roles', {
        filters: [
            prismic.filter.at('my.roles.office', theOffice.id),
        ],
        fetchLinks: ['office.name'],
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        pageSize: 20,
    });

    return {
        //@ts-ignore
        officeRoles,
        office: theOffice
    } as any
}