import { linkField, linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const ProductHeroBlock: Block = {
  slug: 'ProductHero', // required
  interfaceName: 'HeroBlock', // optional
  fields: [
    // required
    {
        name: 'heroContent',
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
                name: 'list',
                type: 'array',
                fields: [
                    {
                        name: 'listItem',
                        type: 'text',
                    }
                ]
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
        name: 'heroImages',
        type: 'group',
        fields: [
            {
                name: 'images',
                type: 'upload', // required
                relationTo: 'media', // required
                hasMany: true,
            }
        ]
    },
  ],
}
