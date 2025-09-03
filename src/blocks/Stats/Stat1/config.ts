import { Block } from 'payload'

export const Stat1: Block = {
  slug: 'stat1',
  interfaceName: 'Stat1Block',
  fields: [
    {
      name: 'stats',
      type: 'array',
      maxRows: 3,
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
  ],
}
