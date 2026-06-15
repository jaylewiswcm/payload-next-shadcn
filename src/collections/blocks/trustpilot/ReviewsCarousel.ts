import { linkField, linkFields } from '@/components/fields/LinkField'
import { Block } from 'payload'

export const ReviewsCarousel: Block = {
  slug: 'ReviewsCarousel', // required
  interfaceName: 'ReviewsCarousel', // optional 
labels: {
    singular: 'Reviews Carousel',
    plural: 'Reviews Carousel',
  },
  fields: [
    // required
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
  ],
}
