import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const ProductIntro: Block = {
  slug: 'ProductIntro', // required
  interfaceName: 'ProductIntro', // optional
  fields: [
    {
        name: 'content',
        type: 'group',
        fields: [
            {
                name: 'useIcon',
                defaultValue: 'icon',
                type: 'radio',
                options: [
                    { label: 'Display Icon', value: 'icon' },
                    { label: 'Remove Icon', value: 'noIcon' },
                ],
                admin: { 
                    layout: 'horizontal',
                    width: "20%",
                    components: {
                        Field: '@/components/fields/RadioField',
                    },
                },
            },
            {
                name: 'heading',
                type: 'text',
            },
            {
                name: 'body',
                type: 'text',
            }
        ]
    },
  ],
}
