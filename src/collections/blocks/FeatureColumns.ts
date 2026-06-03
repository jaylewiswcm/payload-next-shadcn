import { Block } from 'payload'

export const FeatureColumns: Block = {
  slug: 'FeatureColumns', // required
  interfaceName: 'FeatureColumns', // optional
  labels: {
    singular: 'Feature Columns',
    plural: 'Feature Columns',
  },
  fields: [
    {
        type: 'array',
        name: 'features',
        fields: [
            {
                name: 'icon',
                type: 'text',
                admin: { components: { Field: '@/components/fields/IconPicker' } },
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
        ]
    }
  ],
}
