import { CollectionConfig } from 'payload'
import { revalidatePage } from '../hooks/revalidatePage'
// Blocks
import { ProductHeroBlock } from '../blocks/product/Hero'
import { ProductIntro } from '../blocks/product/Intro'
import { KeyFeatures } from '../blocks/product/KeyFeatures'
import { FeaturesGrid } from '../blocks/product/FeaturesGrid'
import { OverlayBanner } from '../blocks/product/OverlayBanner'
import { CardGrid } from '../blocks/content/CardGrid'
import { Stats } from '../blocks/product/Stats'


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
                      ProductHeroBlock,
                      ProductIntro,
                      KeyFeatures,
                      FeaturesGrid,
                      OverlayBanner,
                      CardGrid,
                      Stats
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
        label: 'Data',
        fields: [
        {
          name: 'specifications',
          type: 'group', // required
          interfaceName: 'Specifications', // optional
          fields: [
          {
            type: 'row',
            fields: [
            {
            name: 'maxSpeedGroup',
            type: 'group',
            interfaceName: 'MaxSpeed',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'speed',
                    label: 'Speed',
                    type: 'number',
                    required: true,
                    admin: {
                      width: '20%',
                    },
                  },
                  {
                    name: 'unit',
                    label: 'Unit',
                    type: 'select',
                    defaultValue: 'mph',
                    required: true,
                    options: [
                      {
                        label: 'mph',
                        value: 'mph',
                      },
                      {
                        label: 'kph',
                        value: 'kph',
                      },
                    ],
                    admin: {
                      width: '20%',
                    },
                  },
                ],
              },
            ],
          },
          ]},
          {
            type: 'row',
            fields: [
            {
            name: 'maxRangeGroup',
            type: 'group',
            interfaceName: 'MaxRange',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'value',
                    label: 'Value',
                    type: 'number',
                    required: true,
                    admin: {
                      width: '20%',
                    },
                  },
                  {
                    name: 'unit',
                    label: 'Unit',
                    type: 'select',
                    defaultValue: 'miles',
                    required: true,
                    options: [
                      {
                        label: 'Miles',
                        value: 'miles',
                      },
                      {
                        label: 'Kilometers',
                        value: 'kilometers',
                      },
                    ],
                    admin: {
                      width: '20%',
                    },
                  },
                ],
              },
            ],
          },
          ]},
          {
            type: 'row',
            fields: [
            {
            name: 'maxUserWeightGroup',
            type: 'group',
            interfaceName: 'MaxUserWeight',
            required: true,
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'stone',
                    label: 'Stone (st)',
                    type: 'number',
                    required: true,
                    admin: {
                      width: '20%',
                    },
                  },
                  {
                    name: 'pounds',
                    label: 'Pounds (lbs)',
                    type: 'number',
                    required: true,
                    admin: {
                      width: '20%',
                    },
                  },
                
                ],
              },
            ],
          },
          ]},
          {
            type: 'row',
            fields: [
            {
            name: 'scooterWghtGroup',
            type: 'group',
            interfaceName: 'ScooterWeight',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'value',
                    label: 'Value',
                    type: 'number',
                    required: true,
                    admin: {
                      width: '20%',
                    },
                  },
                  {
                    name: 'unit',
                    label: 'Unit',
                    type: 'select',
                    required: true,
                    defaultValue: 'kg',
                    options: [
                      {
                        label: 'kg',
                        value: 'kg',
                      }, 
                    ],
                    admin: {
                      width: '20%',
                    },
                  },
                ],
              },
            ],
          },
          ]},
            {
              type: 'text', 
              name: 'maxSpeed',
              label: 'Max Speed',
            },
            {
              type: 'text', 
              name: 'maxRange',
              label: 'Max Range',
            },
            {
              type: 'text', 
              name: 'maxUserWeight',
              label: 'Max User Weight',
            },
            {
              type: 'text', 
              name: 'weight',
              label: 'Scooter Weight',
            },
            {
              type: 'text', 
              name: 'battery',
              label: 'Battery',
            },
            {
              type: 'checkbox', 
              name: 'fixedLights',
              label: 'Fixed Lights',
            },
            {
              type: 'checkbox', 
              name: 'offBoardingCharging',
              label: 'Off-board Charging',
            },
            {
            type: 'radio',
            name: 'testLights',
            label: 'Fixed Lights',
            options: [
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ],
            defaultValue: 'no',
            admin: {
              layout: 'horizontal',
            },
          },
            {
              type: 'text', 
              name: 'maxSlope',
              label: 'Max Slope',
            },
            {
              type: 'text', 
              name: 'turningRadius',
              label: 'Turning Radius',
            },
            {
              type: 'checkbox', 
              name: 'suspension',
              label: 'Suspension',
            },
            {
              type: 'text', 
              name: 'tyreType',
              label: 'Tyre Type',
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
