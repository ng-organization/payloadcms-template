import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const CTA1: Block = {
  slug: 'cta1',
  interfaceName: 'CTA1Block',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
