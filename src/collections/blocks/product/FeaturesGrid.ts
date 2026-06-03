import { linkField, linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const FeaturesGrid: Block = {
  slug: 'FeaturesGrid', // required
  interfaceName: 'FeaturesGrid', // optional
  fields: [
    {
        name: 'sectionHeading',
        type: 'group',
        fields: [
            {
                name: 'heading',
                type: 'text',
            },
            {
                name: 'buttons',
                type: 'array',
                maxRows: 2,
                fields: [
                    ...linkField
                ]
            }
        ]
    },
    {
        name: 'features',
        type: 'array',
        fields: [
            {
                name: 'image',
                type: 'upload', 
                relationTo: 'media',
                hasMany: false,
            },
            {
                name: 'heading',
                type: 'text',
            },
            {
                name: 'body',
                type: 'text',
            },
        ]
    },
    ],
}
