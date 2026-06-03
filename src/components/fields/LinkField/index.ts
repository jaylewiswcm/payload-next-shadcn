// ---------- Reusable link field group ----------

import { Field } from "payload";

// Used by top-level items and inside dropdown blocks.
export const linkField: any[] = [
    {  
    name:'link',
    type: "group",
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'linkType',
                    type: 'radio',
                    dbName: 'linkType',
                    defaultValue: 'internal',
                    options: [
                    { label: 'Internal Page', value: 'internal' },
                    { label: 'Custom URL', value: 'custom' },
                    ],
                    admin: { 
                        layout: 'horizontal',
                        width: "20%",
                        components: {
                            Field: '@/components/fields/RadioField',
                        },
                    },
                },
                 {
                    name: 'newTab',
                    type: 'radio',
                    dbName: 'newTab',
                    defaultValue: 'default',
                    options: [
                    { label: 'Open in same tab', value: 'default' },
                    { label: 'Open in new tab', value: 'newTab' },
                    ],
                    admin: { 
                        layout: 'horizontal',
                        width: "20%",
                        components: {
                            Field: '@/components/fields/RadioField',
                        },
                    },
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'linkLabel',
                    type: 'text',
                    admin: {
                        width: "50%"
                    },
                },
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.linkType === 'internal',
                        width: "50%"
                    },
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.linkType === 'custom',
                        width: "50%"
                    },
                },
                
            ]
        }
    ]
 }
 
]

export const linkFields: any[] = [
    {  
    type: "row",
    fields: [
        {
            name: 'linkLabel',
            type: 'text',
        },
         {
            name: 'linkType',
            type: 'radio',
            dbName: 'linkType',
            defaultValue: 'internal',
            options: [
            { label: 'Internal Page', value: 'internal' },
            { label: 'Custom URL', value: 'custom' },
            ],
            admin: { 
                layout: 'horizontal',
                width: "20%",
                components: {
                    Field: '@/components/fields/RadioField',
                },
             },
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData?.linkType === 'internal',
                width: "40%"
            },
        },
        {
            name: 'url',
            type: 'text',
            required: true,
            admin: {
                condition: (_, siblingData) => siblingData?.linkType === 'custom',
                width: "40%"
            },
        },
        {
            name: 'newTab',
            type: 'checkbox',
            label: 'Open in new tab',
            defaultValue: false, 
            admin: {
                width: "20%",
                components: {
                    Field: '@/components/fields/SwitchField',
                },
            }
        },
    ]
 }
 
]
