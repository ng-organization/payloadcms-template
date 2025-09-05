import type { CollectionConfig } from 'payload'

import { Announcement1 } from '@/blocks/Announcements/Announcement1/config'
import { FAQ1 } from '@/blocks/FAQ/FAQ1/config'
import { FAQ2 } from '@/blocks/FAQ/FAQ2/config'
import { FAQ3 } from '@/blocks/FAQ/FAQ3/config'
import { Feature2 } from '@/blocks/Features/Feature2/config'
import { GoogleMaps } from '@/blocks/GoogleMaps/config'
import { Hero1 } from '@/blocks/Hero/Hero1/config'
import { Hero2 } from '@/blocks/Hero/Hero2/config'
import { Stat1 } from '@/blocks/Stats/Stat1/config'
import { Stat2 } from '@/blocks/Stats/Stat2/config'
import { Testimonial1 } from '@/blocks/Testimonials/Testimonial1/config'
import { Testimonial2 } from '@/blocks/Testimonials/Testimonial2/config'
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { CTA1 } from '../../blocks/CallToAction/CTA1/config'
import { Content } from '../../blocks/Content/config'
import { Feature1 } from '../../blocks/Features/Feature1/config'
import { ContactForm } from '../../blocks/Forms/ContactForm/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Team1 } from '../../blocks/Team/Team1/config'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CTA1,
                Content,
                MediaBlock,
                ContactForm,
                Team1,
                Feature1,
                Feature2,
                Testimonial1,
                Testimonial2,
                FAQ1,
                FAQ2,
                FAQ3,
                Hero1,
                Hero2,
                Stat1,
                Stat2,
                GoogleMaps,
                Announcement1,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
