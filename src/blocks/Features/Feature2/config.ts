import type { Block } from 'payload'

export const Feature2: Block = {
  slug: 'feature2',
  interfaceName: 'Feature2Block',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'autoplayInterval',
      type: 'number',
      defaultValue: 4000,
      label: 'Autoplay Interval',
      admin: {
        description: 'The interval in milliseconds to autoplay the carousel.',
      },
    },
    {
      name: 'features',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
