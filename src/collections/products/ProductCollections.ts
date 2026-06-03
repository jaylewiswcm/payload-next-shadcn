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
import { ExploreProducts } from '../blocks/ExploreProducts'
// New


export const ProductCollections: CollectionConfig = {
  slug: 'productCollections',
  labels: {
    singular: 'Collection Page',
    plural: 'Collection Pages',
  },
  admin: {
    useAsTitle: 'collectionTitle',
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
      name: 'collectionTitle', // required
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
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        HeroBlock,
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
