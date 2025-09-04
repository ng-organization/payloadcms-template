import { Block } from 'payload'

export const GoogleMaps: Block = {
  slug: 'googleMaps',
  interfaceName: 'GoogleMapsBlock',
  fields: [
    {
      name: 'zoom',
      type: 'number',
      defaultValue: 15,
      admin: {
        description:
          'The zoom level of the map, the higher the number the more zoomed in the map will be',
      },
    },
    {
      name: 'places',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
          required: true,
        },
        {
          name: 'latitude',
          type: 'number',
          required: true,
        },
        {
          name: 'longitude',
          type: 'number',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      admin: {
        description: 'The first place will be used as the default center of the map',
      },
    },
  ],
}
