import { ResourcesDocument } from "../../prismicio-types";
import { prismicClient } from "./index.prismic";
import * as prismic from "@prismicio/client";

export const getLatestResources = async () => {
    return await prismicClient.getByType("resources", {
        filters: [
            // prismic.filter.at('my.roles.office', theOffice.id),
        ],
        // fetchLinks: ["office.name"],
        orderings: {
            field: "document.first_publication_date",
            direction: "desc",
        },
        pageSize: 20,
    });
};

export async function getResourceDetails(uid: string):Promise<ResourcesDocument<string>>{
    return await prismicClient.getByUID('resources', uid);
}
