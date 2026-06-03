import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const FeatureAccordion: Block = {
  slug: 'FeatureAccordion', // required
  interfaceName: 'FeatureAccordion', // optional
  fields: [
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
            type: 'array',
            name: 'accordions',
            interfaceName: 'accordions',
            fields: [
                {
                    name: 'title', 
                    label: 'Title',
                    type: 'text',
                },
                {
                    name: 'body', 
                    label: 'Body',
                    type: 'text',
                },
                    ...linkFields,
                    {
                    name: 'image', 
                    type: 'upload',
                    relationTo: 'media',
                },
                ]
            },
             {
                    type: 'group',
                    name: 'button',
                    fields: [
                        {
                            type: 'text',
                            name: 'label'
                        },
                        ...linkFields
                    ]
                }
  ],
}
