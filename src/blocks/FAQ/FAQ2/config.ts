import type { Block } from 'payload'

export const FAQ2: Block = {
  slug: 'faq2',
  interfaceName: 'FAQ2Block',
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
      name: 'faqs',
      type: 'array',
      maxRows: 10,
      fields: [
        {
          name: 'question',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'answer',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
  ],
}
