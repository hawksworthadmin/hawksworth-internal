// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticlesDocumentDataSlicesSlice = never;

/**
 * Content for Articles documents
 */
interface ArticlesDocumentData {
  /**
   * Content field in *Articles*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * title field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Short Description  field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  short_description: prismic.KeyTextField;

  /**
   * Image field in *Articles*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Category field in *Articles*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"categories">;

  /**
   * Author field in *Articles*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"people">;

  /**
   * Slice Zone field in *Articles*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticlesDocumentDataSlicesSlice> /**
   * Meta Title field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: articles.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: articles.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Articles*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Articles document from Prismic
 *
 * - **API ID**: `articles`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticlesDocumentData>,
    "articles",
    Lang
  >;

type CategoriesDocumentDataSlicesSlice = never;

/**
 * Content for Categories documents
 */
interface CategoriesDocumentData {
  /**
   * Name field in *Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Categories*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoriesDocumentDataSlicesSlice> /**
   * Meta Title field in *Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: categories.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: categories.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Categories*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Categories document from Prismic
 *
 * - **API ID**: `categories`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoriesDocumentData>,
    "categories",
    Lang
  >;

type EventsDocumentDataSlicesSlice = never;

/**
 * Content for Events documents
 */
interface EventsDocumentData {
  /**
   * Image field in *Events*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * About the event field in *Events*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events.about_the_event
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_the_event: prismic.RichTextField;

  /**
   * Location field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Slice Zone field in *Events*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: events.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EventsDocumentDataSlicesSlice> /**
   * Meta Title field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: events.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: events.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Events*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Events document from Prismic
 *
 * - **API ID**: `events`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventsDocumentData>, "events", Lang>;

type OfficesDocumentDataSlicesSlice = never;

/**
 * Content for Offices documents
 */
interface OfficesDocumentData {
  /**
   * Name field in *Offices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter office name
   * - **API ID Path**: offices.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Offices*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<OfficesDocumentDataSlicesSlice> /**
   * Meta Title field in *Offices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: offices.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Offices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: offices.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Offices*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Offices document from Prismic
 *
 * - **API ID**: `offices`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OfficesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<OfficesDocumentData>,
    "offices",
    Lang
  >;

type PeopleDocumentDataSlicesSlice = never;

/**
 * Content for People documents
 */
interface PeopleDocumentData {
  /**
   * Role field in *People*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: people.role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  role: prismic.ContentRelationshipField<"roles">;

  /**
   * Full Name field in *People*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: people.full_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  full_name: prismic.KeyTextField;

  /**
   * Biography field in *People*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: people.biography
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  biography: prismic.RichTextField;

  /**
   * Image field in *People*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: people.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Phone Number field in *People*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex +234 533 3534
   * - **API ID Path**: people.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Slice Zone field in *People*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: people.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PeopleDocumentDataSlicesSlice> /**
   * Meta Title field in *People*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: people.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *People*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: people.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *People*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: people.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * People document from Prismic
 *
 * - **API ID**: `people`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PeopleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PeopleDocumentData>, "people", Lang>;

/**
 * Item in *Projects → Services*
 */
export interface ProjectsDocumentDataServicesItem {
  /**
   * Service field in *Projects → Services*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.services[].service
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  service: prismic.ContentRelationshipField<"services">;
}

/**
 * Item in *Projects → Participants*
 */
export interface ProjectsDocumentDataParticipantsItem {
  /**
   * Team member field in *Projects → Participants*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.participants[].team_member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  team_member: prismic.ContentRelationshipField<"people">;
}

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Name field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Services field in *Projects*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.services[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<Simplify<ProjectsDocumentDataServicesItem>>;

  /**
   * Start date field in *Projects*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start_date: prismic.DateField;

  /**
   * End date field in *Projects*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end_date: prismic.DateField;

  /**
   * Content field in *Projects*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Participants field in *Projects*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.participants[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  participants: prismic.GroupField<
    Simplify<ProjectsDocumentDataParticipantsItem>
  >;

  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

type ResourcesDocumentDataSlicesSlice = never;

/**
 * Content for Resources documents
 */
interface ResourcesDocumentData {
  /**
   * Name field in *Resources*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Image field in *Resources*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * About field in *Resources*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about: prismic.RichTextField;

  /**
   * Category field in *Resources*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"categories">;

  /**
   * Content field in *Resources*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Slice Zone field in *Resources*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ResourcesDocumentDataSlicesSlice> /**
   * Meta Title field in *Resources*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: resources.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Resources*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: resources.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Resources*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: resources.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Resources document from Prismic
 *
 * - **API ID**: `resources`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ResourcesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ResourcesDocumentData>,
    "resources",
    Lang
  >;

type RolesDocumentDataSlicesSlice = never;

/**
 * Content for Roles documents
 */
interface RolesDocumentData {
  /**
   * Name field in *Roles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: roles.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Office field in *Roles*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: roles.office
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  office: prismic.ContentRelationshipField<"offices">;

  /**
   * Slice Zone field in *Roles*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: roles.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RolesDocumentDataSlicesSlice> /**
   * Meta Title field in *Roles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: roles.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Roles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: roles.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Roles*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: roles.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Roles document from Prismic
 *
 * - **API ID**: `roles`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RolesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<RolesDocumentData>, "roles", Lang>;

type ServicesDocumentDataSlicesSlice = never;

/**
 * Content for Services documents
 */
interface ServicesDocumentData {
  /**
   * Name field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Services*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: services.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServicesDocumentDataSlicesSlice> /**
   * Meta Title field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: services.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: services.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServicesDocumentData>,
    "services",
    Lang
  >;

export type AllDocumentTypes =
  | ArticlesDocument
  | CategoriesDocument
  | EventsDocument
  | OfficesDocument
  | PeopleDocument
  | ProjectsDocument
  | ResourcesDocument
  | RolesDocument
  | ServicesDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticlesDocument,
      ArticlesDocumentData,
      ArticlesDocumentDataSlicesSlice,
      CategoriesDocument,
      CategoriesDocumentData,
      CategoriesDocumentDataSlicesSlice,
      EventsDocument,
      EventsDocumentData,
      EventsDocumentDataSlicesSlice,
      OfficesDocument,
      OfficesDocumentData,
      OfficesDocumentDataSlicesSlice,
      PeopleDocument,
      PeopleDocumentData,
      PeopleDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataServicesItem,
      ProjectsDocumentDataParticipantsItem,
      ProjectsDocumentDataSlicesSlice,
      ResourcesDocument,
      ResourcesDocumentData,
      ResourcesDocumentDataSlicesSlice,
      RolesDocument,
      RolesDocumentData,
      RolesDocumentDataSlicesSlice,
      ServicesDocument,
      ServicesDocumentData,
      ServicesDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
