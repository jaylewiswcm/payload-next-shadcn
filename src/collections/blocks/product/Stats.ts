import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const Stats: Block = {
  slug: 'Stats', // required
  interfaceName: 'Stats', // optional
  labels: {
    singular: 'Stats',
    plural: 'Stats',
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
