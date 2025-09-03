import type { Block } from 'payload'

export const Testimonial2: Block = {
  slug: 'testimonial2',
  interfaceName: 'Testimonial2Block',
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
  ],
}
