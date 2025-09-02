import type { Block } from 'payload'

export const Testimonial1: Block = {
  slug: 'testimonial1',
  interfaceName: 'Testimonial1Block',
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
      name: 'testimonials',
      type: 'array',
      maxRows: 6,
      fields: [
        {
          name: 'testimonial',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          localized: true,
          required: true,
          defaultValue: 'Client Name',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'position',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
}
