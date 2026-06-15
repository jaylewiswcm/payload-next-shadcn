import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const Specifications: Block = {
  slug: 'SpecificationsBlock', // required
  interfaceName: 'SpecificationsBlock', // optional
  dbName: 'specsBlock',
  labels: {
    singular: 'Specifications',
    plural: 'Specifications',
  },
  fields: [
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
                name: 'includeSwitch',
                defaultValue: 'switch',
                type: 'radio',
                options: [
                    { label: 'Include Switch', value: 'switch' },
                    { label: 'Disable Switch', value: 'disable' },
                ],
                admin: { 
                    layout: 'horizontal',
                    width: "20%",
                    components: {
                        Field: '@/components/fields/RadioField',
                    },
                },
            },
        ]
    },
  ],
}
