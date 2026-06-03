import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const OverlayBanner: Block = {
  slug: 'OverlayBanner', // required
  interfaceName: 'OverlayBanner', // optional
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
        ]
    },
    {
        name: 'backgroundImage',
        type: 'group',
        fields: [
            {
                name: 'image',
                type: 'upload', 
                relationTo: 'media',
                hasMany: false,
            },            
        ]
    },
    ],
}
