import { Block } from 'payload'

export const Stat2: Block = {
  slug: 'stat2',
  interfaceName: 'Stat2Block',
  fields: [
    {
      name: 'stats',
      type: 'array',
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}
