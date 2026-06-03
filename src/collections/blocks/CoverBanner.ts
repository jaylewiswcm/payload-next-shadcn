import { Block } from 'payload'

export const CoverBanner: Block = {
  slug: 'CoverBanner', // required
  interfaceName: 'CoverBanner', // optional
  labels: {
    singular: 'Cover Banner',
    plural: 'Cover Banners',
  },
  fields: [
     {
        name: 'backgroundImage', 
        type: 'upload',
        relationTo: 'media',
    },
    {
        type: 'group',
        name: 'content',
        fields: [
            {
                name: 'logo', 
                type: 'upload',
                relationTo: 'media',
            },
            {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            },
            {
            name: 'body', 
            label: 'Body',
            type: 'text',
            },
            {
                type: 'group',
                name: 'bottomLogos',
                fields: [
                    {
                        name: 'body', 
                        label: 'Body',
                        type: 'text',
                    },
                    {
                        name: 'logos', 
                        label: 'Logos',
                        type: 'array',
                        fields: [
                            {
                                name: 'logo', 
                                type: 'upload',
                                relationTo: 'media',
                            },
                        ]
                    },
                ]
            }
        ]
    }
  ],
}
