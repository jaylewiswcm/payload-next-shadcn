import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const KeyFeatures: Block = {
  slug: 'KeyFeatures', // required
  interfaceName: 'KeyFeatures', // optional
  labels: {
    singular: 'Key Features',
    plural: 'Key Features',
  },
  fields: [
    {
        name: 'content',
        type: 'group',
        fields: [
            {
                name: 'heading',
                type: 'text',
                defaultValue: 'Key Features'
            },
            {
                name: 'features',
                type: 'array',
                fields: [
                    {
                        name: 'heading',
                        type: 'text'
                    },
                    {
                        name: 'body',
                        type: 'textarea'
                    },
                    {
                        name: 'icon',
                        type: 'text',
                        admin: { components: { Field: '@/components/fields/IconPicker' } },
                    },
                   {
                        name: 'image',
                        type: 'upload', 
                        relationTo: 'media',
                        hasMany: false,
                    }
                ]
            }
        ]
    },
  ],
}
