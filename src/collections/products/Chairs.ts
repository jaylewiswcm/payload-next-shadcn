import { CollectionConfig } from 'payload'
import { revalidatePage } from '../hooks/revalidatePage'
import { QuoteBlock } from '../blocks/QuoteBlock'
import { HeroBlock } from '../blocks/HeroBlock'
import { CtaBlock } from '../blocks/CtaBlock'
import { FaqBlock } from '../blocks/FaqBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { GridCardsBlock } from '../blocks/GridCardsBlock'
import { LogosBlock } from '../blocks/LogosBlock'
import { RichText } from '../blocks/RichText'

export const Chairs: CollectionConfig = {
  slug: 'chairs',
  admin: {
    useAsTitle: 'productName',
    group: 'Products',
    livePreview: {
      url: ({ data }) =>
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/${data.slug}/preview?secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1500,
      },
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return true
      }

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },

  fields: [
    {
      name: 'productName', // required
      label: 'Chair Name',
      type: 'text', // required
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (!value) return

            return value
              .trim()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '')
              .toLowerCase()
          },
        ],
      },
    },
    {
  type: 'tabs',
  tabs: [
    {
      label: 'Information',
      fields: [
        {
          name: 'names',
          type: 'group', // required
          interfaceName: 'NameVariations', // optional
          fields: [
            {
              type: 'text', 
              name: 'shortName',
              label: 'Short Name',
            },
            {
              type: 'text', 
              name: 'shortNameSimple',
              label: 'Short Name Simple',
            },
          ],
        },
        {
          type: 'text', 
          name: 'menuDesc',
          label: 'Description (In menu)',
        },
         {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          label: 'Collection',
          required: false,
          // hasMany: true,  // uncomment if a product can have multiple categories
        },
      ]
    },
    {
      label: 'Images',
      fields: [
        {
          name: 'mediaGallery',
          label: 'Media Gallery',
          type: 'array',
          labels: {
              singular: 'Image',
              plural: 'Images',
            },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
          {
            name: 'productCutout',
            label: 'Chair Cutout',
            type: 'upload',
            relationTo: 'media',
          },
           {
          name: 'sliderImages',
          label: 'Slider Images',
          type: 'array',
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
        ] 
    },
    {
        label: 'Resources',
        fields: [
        {
            type: 'array', 
            name: 'productResources',
            label: 'Product Resources',
            labels: {
              singular: 'Resource',
              plural: 'Resources',
            },
            fields: [
              {
                name: 'title',
                type: 'text',
              },
              {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
              },
              {
                name: 'caption',
                type: 'text',
              },
            ]
        },
        ]
    },
    {
        label: 'Content',
        fields: [
        {
          name: 'hero',
          type: 'group', // required
          interfaceName: 'Hero', // optional
          fields: [
            {
              type: 'text', 
              name: 'title',
              label: 'Title',
            },
            {
              type: 'text', 
              name: 'subtitle',
              label: 'Subtitle',
            },
          ],
        },
        ]
    },
  ],
},
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
