import type { GlobalConfig, Block } from 'payload'

import { revalidateLayout } from './hooks/revalidateLayout'
import { linkFields } from '@/components/fields/LinkField'

/// Menu Block
const MenuBlockFooter: Block = {
  slug: 'submenublockfooter', // required
  interfaceName: 'SubmenuFooter', // optional
  fields: [
    // required
    {
      name: 'submenufooter',
      type: 'array',
      label: 'Submenu Item',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'label',
          type: 'text',
        },

        {
          name: 'link',
          type: 'relationship',
          relationTo: ['pages'],
        },
      ],
    },
  ],
}

export const Footer: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerNavigation',
      fields: [
        {
          name: 'links',
          label: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            ...linkFields, 
          ]
        }
      ],
      maxRows: 2,
      type: 'array',
    },
    {
      name: 'logo',
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      name: 'copyrightNotice',
      type: 'text',
    },
  ],
  slug: 'footer',
  hooks: {
    afterChange: [revalidateLayout],
  },
}
