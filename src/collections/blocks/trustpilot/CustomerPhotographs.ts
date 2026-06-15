import { linkField, linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const CustomerPhotographs: Block = {
  slug: 'CustomerPhotographs', // required
  interfaceName: 'CustomerPhotographs', // optional 
labels: {
    singular: 'Customer Photographs',
    plural: 'Customer Photographs',
  },
  fields: [
    // required
    {
        name: 'content',
        type: 'group',
        fields: [
            {
                name: 'heading',
                type: 'text',
            },
            {
                name: 'body',
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
        name: 'images',
        type: 'upload', // required
        relationTo: 'media', // required
        hasMany: true,
    }
  ],
}
