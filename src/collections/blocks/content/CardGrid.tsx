import { Block } from 'payload'

export const CardGrid: Block = {
  slug: 'CardGrid', // required
  interfaceName: 'CardGrid', // optional
  fields: [
    // required
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'textarea',
    },
    {
      name: 'cardGrid',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'image', // required
          type: 'upload', // required
          relationTo: 'media', // required
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'text',
          type: 'textarea',
        },
        {
          name: 'link',
          type: 'text',
        },
     
      ],
    },
  ],
}
