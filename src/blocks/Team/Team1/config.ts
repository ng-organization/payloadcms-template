import type { Block } from 'payload'

export const Team1: Block = {
    slug: 'team1',
    interfaceName: 'Team1Block',
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
            name: 'members',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'role',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'avatar',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
}