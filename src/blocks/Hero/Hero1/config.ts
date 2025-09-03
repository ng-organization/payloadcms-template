import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Hero1: Block = {
  slug: 'hero1',
  interfaceName: 'Hero1Block',
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
