import type { Block } from 'payload'

export const Feature1: Block = {
    slug: 'feature1',
    interfaceName: 'Feature1Block',
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
            name: 'features',
            type: 'array',
            maxRows: 3,
            fields: [
                {
                    name: 'title',
                    type: 'text',
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
            ],
        },
    ],
}