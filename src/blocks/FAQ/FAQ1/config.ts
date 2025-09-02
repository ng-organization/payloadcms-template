import type { Block } from 'payload'

export const FAQ1: Block = {
  slug: 'faq1',
  interfaceName: 'FAQ1Block',
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
