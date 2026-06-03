import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'Hero', // required
  interfaceName: 'HeroBlock', // optional
  fields: [ 
    // required
    {
      name: 'heroHeading', // rename this to heading
      type: 'text',
    },
    {
      name: 'heroText',
      type: 'textarea',
    },
    {
      name: 'heroImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
       hasMany: true,
    },
    {
      name: 'heroButtons', // required
      type: 'group', // required
      interfaceName: 'Buttons', // optional
      fields: [
        // required
        {
          type: "group",
          fields: [
          {
            name: 'primaryLabel',
            type: 'text',
          },
          {
            name: 'primaryLink',
            type: 'text',
          },
          ]
        },
        {
          type: "group",
          fields: [
          {
            name: 'secondaryLabel',
            type: 'text',
          },
          {
            name: 'secondaryLink',
            type: 'text',
          },
        ]}
      ],
    },
  ],
}
