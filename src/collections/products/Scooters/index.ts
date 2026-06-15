import { CollectionConfig } from 'payload'
import { revalidatePage } from '../../hooks/revalidatePage'
// Blocks
import { ProductHero } from '../../blocks/product/Hero'
import { ProductIntro } from '../../blocks/product/Intro'
import { KeyFeatures } from '../../blocks/product/KeyFeatures'
import { FeaturesGrid } from '../../blocks/product/FeaturesGrid'
import { OverlayBanner } from '../../blocks/product/OverlayBanner'
import { CardGrid } from '../../blocks/content/CardGrid'
import { Specifications as SpecificationsBlock } from '../../blocks/product/Specifications'
import { Specifications } from './Specification'
import { FeatureAccordion } from '@/collections/blocks/FeatureAccordion'
import { CustomerPhotographs } from '@/collections/blocks/trustpilot/CustomerPhotographs'
import { ImageHotspots } from '@/collections/blocks/product/ImageHotspots'


export const Scooters: CollectionConfig = {
  slug: 'scooters',
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
      label: 'Scooter Name',
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
          label: 'Template',
          fields: [
             {
                  name: 'layout', // required
                  type: 'blocks', // required
                  minRows: 1,
                  maxRows: 20,
                  blocks: [
                      ProductHero,
                      ProductIntro,
                      KeyFeatures,
                      FeaturesGrid,
                      OverlayBanner,
                      CardGrid,
                      SpecificationsBlock,
                      FeatureAccordion,
                      CustomerPhotographs,
                      ImageHotspots
                  ],
                },
          ]
        },
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
            label: 'Scooter Cutout',
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
    {
        label: 'Specifications',
        fields: [Specifications],
    },
  ],
},
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
