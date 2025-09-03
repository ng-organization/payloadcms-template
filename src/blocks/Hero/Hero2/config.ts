import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

export const Hero2: Block = {
  slug: 'hero2',
  interfaceName: 'Hero2Block',
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