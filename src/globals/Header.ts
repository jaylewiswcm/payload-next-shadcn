import type { GlobalConfig, Block } from 'payload'

import { revalidateLayout } from './hooks/revalidateLayout'
import { linkFields } from '../components/fields/LinkField'

// ── Reusable field groups ────────────────────────────────

// Image + Title + Desc + url (used by "View All" and Generic "Link")
const cardLinkFields = [
  { name: 'image', type: 'upload', relationTo: 'media' },
  { name: 'title', type: 'text', required: true },
  { name: 'description', type: 'textarea' },
  ...linkFields,
] as const

// Icon (Lucide) + Text + url (used by Generic "Link list")
const iconLinkFields = [
  {
    name: 'icon',
    type: 'text',
    admin: { components: { Field: '@/components/fields/IconPicker' } },
  },
  { name: 'title', type: 'text', required: true },
  ...linkFields,
] as const

// ── Submenu type blocks ──────────────────────────────────

const ProductSubmenu: Block = {
  slug: 'productSubmenu',
  labels: { singular: 'Product Submenu', plural: 'Product Submenus' },
  fields: [
    {
      name: 'viewAll',
      type: 'group',
      label: 'View All Link',
      fields: [...cardLinkFields],
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: ['scooters', 'chairs'], // polymorphic
      hasMany: true,
      label: 'Product Links',
    },
  ],
}
const GenericSubmenu: Block = {
  slug: 'genericSubmenu',
  labels: { singular: 'Generic Submenu', plural: 'Generic Submenus' },
  fields: [
    {
      name: 'link',
      type: 'group',
      label: 'Featured Link',
      fields: [...cardLinkFields],
    },
    {
      name: 'linkList',
      type: 'array',
      label: 'Link List',
      labels: { singular: 'Link', plural: 'Links' },
      fields: [...iconLinkFields],
    },
  ],
}
const ContactSubmenu: Block = {
  slug: 'contactSubmenu',
  labels: { singular: 'Contact Submenu', plural: 'Contact Submenus' },
  fields: [
    {
      name: 'linkList',
      type: 'array',
      label: 'Link List',
      labels: { singular: 'Link', plural: 'Links' },
      fields: [...iconLinkFields],
    },
    {
      name: 'pullOutLink',
      type: 'group',
      label: 'Pull Out Link',
      fields: [...cardLinkFields], // image + title + desc + url
    },
    {
      name: 'body',
      type: 'group',
      label: 'Body',
      fields: [
        { name: 'heading', type: 'text' },
        {
          name: 'content',
          type: 'richText', // textarea that allows links
        },
      ],
    },
  ],
}

const ResourceSubmenu: Block = {
  slug: 'resourceSubmenu',
  labels: { singular: 'Resource Submenu', plural: 'Resource Submenus' },
  fields: [
    {
      name: 'linkList',
      type: 'array',
      label: 'Link List',
      labels: { singular: 'Link', plural: 'Links' },
      fields: [...iconLinkFields],
    },
    {
      name: 'articles',
      type: 'group',
      label: 'Latest Articles',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Latest Articles',
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: 3,
          admin: {
            description: 'How many of the most recent articles to show.',
          },
        },
      ],
    },
  ],
}

// ── Global ───────────────────────────────────────────────

export const Header: GlobalConfig = {
  slug: 'header',
  access: { read: () => true },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Main Menu',
      labels: { singular: 'Item', plural: 'Items' },
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'hasDropdown',
          type: 'checkbox',
          label: 'Add Submenu',
          defaultValue: false,
          admin: {
            components: { Field: '@/components/fields/SwitchField' },
          },
        },
        // Direct link — only when no dropdown
        ...linkFields.map((f) => ({
          ...f,
          admin: {
            ...('admin' in f ? f.admin : {}),
            condition: (data: any, siblingData: any) => {
              if (siblingData?.hasDropdown) return false
              const original = (f as any).admin?.condition
              return original ? original(data, siblingData) : true
            },
          },
        })),
        // Submenu — one block, max one row, editor picks the type
        {
          name: 'submenu',
          type: 'blocks',
          maxRows: 1,
          blocks: [ProductSubmenu, GenericSubmenu, ContactSubmenu, ResourceSubmenu],
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.hasDropdown),
            description: 'Pick a submenu type. More types (Blog, Contact) coming.',
          },
        },
      ],
    },
    
    { name: 'primaryButtonLabel', type: 'text' },
    { name: 'primaryButtonLink', type: 'text' },
    { name: 'secondaryButtonLabel', type: 'text' },
    { name: 'secondaryButtonLink', type: 'text' },
  ],
  hooks: {
    afterChange: [revalidateLayout],
  },
}