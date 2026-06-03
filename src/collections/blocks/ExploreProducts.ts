import { Block } from 'payload'

export const ExploreProducts: Block = {
  slug: 'ExploreProducts', // required
  interfaceName: 'ExploreProducts', // optional
  labels: {
    singular: 'Explore Products',
    plural: 'Explore Products',
  },
  fields: [
    // required
    {
      name: 'subheading', 
      label: 'Subheading',
      type: 'text',
    },
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'products',
      label: 'Products',
      type: 'array',
        fields: [
           {
            name: 'collection',
            label: 'Collection',
            type: 'relationship',
            relationTo: ['productCollections'],
            hasMany: false,
          },
           {
          name: 'image', 
          type: 'upload',
          relationTo: 'media',
          },
          {
            name: 'title',
            label: 'Collection Title',
            type: 'text'
          },
          {
            name: 'description',
            label: 'Collection Description',
            type: 'text'
          }
        ],
    }
  ],
}
