import { linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const ImageHotspots: Block = {
  slug: 'ImageHotspots', // required
  interfaceName: 'ImageHotspots', // optional
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
            }
        ]
    },
     {
        name: 'image',
        type: 'upload', 
        relationTo: 'media',
        hasMany: false,
    },      
  ],
}
