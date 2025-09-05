import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { TextColorFeature, TextSizeFeature } from 'payload-lexical-typography'

export const Sections: Block = {
  slug: 'sections',
  interfaceName: 'SectionsBlock',
  fields: [
    {
      name: 'types',
      type: 'select',
      defaultValue: 'Content with image, 1/2 grid',
      options: [
        {
          label: 'Content with image, 1/2 grid',
          value: 'contentWithImage12Grid',
        },
        {
          label: 'Content with image, 2/3 grid',
          value: 'contentWithImage23Grid',
        },
        {
          label: 'Content with image, 3/2 grid',
          value: 'contentWithImage32Grid',
        },
        {
          label: 'Content with image, vertical split',
          value: 'contentWithImageVerticalSplit',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            TextColorFeature({
              colors: ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF'],
              hideAttribution: true,
            }),
            TextSizeFeature({ hideAttribution: true }),
          ]
        },
      }),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
