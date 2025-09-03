import type { Block } from 'payload'

export const FAQ3: Block = {
  slug: 'faq3',
  interfaceName: 'FAQ3Block',
  fields: [
    {
      name: 'title',
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
