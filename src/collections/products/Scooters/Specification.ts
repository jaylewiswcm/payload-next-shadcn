import type { Block, Field } from 'payload'

export const Specifications: Field = {
  name: 'specs',
  type: 'group',
  interfaceName: 'Specifications',
  fields: [
    // ─── Top Line Stats ───────────────────────────────────────
    {
      name: 'stats',
      label: 'Top Line Stats',
      type: 'group',
      fields: [
        {
          type: 'row', 
          fields: [
            {
              name: 'maxSpeed',
              label: 'Max Speed',
              type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'value', label: 'Value', type: 'number', required: true, admin: { width: '50%' } },
                        {
                        name: 'unit', label: 'Unit', type: 'select', defaultValue: 'mph',
                        options: [{ label: 'mph', value: 'mph' }, { label: 'kph', value: 'kph' }],
                        admin: { width: '50%' },
                        },
                    ]
                }
              ],
            }
          ],
        },
        {
          type: 'row', 
          fields: [
            {
              name: 'maxRange',
              label: 'Max Range',
              type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'value', label: 'Value', type: 'number', required: true, admin: { width: '50%' } },
                        {
                        name: 'unit', label: 'Unit', type: 'select', defaultValue: 'miles',
                        options: [{ label: 'Miles', value: 'miles' }, { label: 'Kilometers', value: 'kilometers' }],
                        admin: { width: '50%' },
                        },
                    ]
                }
              ],
            },
          ],
        },
        {
          type: 'row', 
          fields: [
          {
              name: 'maxUserWeight',
              label: 'Max User Weight',
              type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'stone', label: 'Stone (st)', type: 'number', required: true, admin: { width: '50%' } },
                        { name: 'lbs', label: 'Pounds (lbs)', type: 'number', required: true, admin: { width: '50%' } },
                    ],
                }
              ],
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'scooterWeight',
              label: 'Scooter Weight',
              type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'stone', label: 'Stone (st)', type: 'number', required: true, admin: { width: '50%' } },
                        { name: 'lbs', label: 'Pounds (lbs)', type: 'number', required: true, admin: { width: '50%' } },
                    ],
                },
              ],
            },
          ],
        },
        {
          type: 'row',
          fields: [
             {
              name: 'battery',
              label: 'Battery',
              type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'value', label: 'Value', type: 'number', required: true, admin: { width: '50%' } },
                        {
                        name: 'unit', label: 'Unit', type: 'select', defaultValue: 'Ah Lith.',
                        options: [{ label: 'Ah Lith.', value: 'Ah Lith.' }],
                        admin: { width: '50%' },
                        },
                    ]
                }
              ],
            }

          ],
        },
                {
                    name: 'fixedLights',
                    label: 'Fixed Lights',
                    type: 'radio',
                    defaultValue: 'yes',
                    options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    ],
                    admin: { 
                        layout: 'horizontal',
                        width: "33%",
                        components: {
                            Field: '@/components/fields/RadioField',
                        },
                    },
                },
               {
                    name: 'offBoardCharging',
                    label: 'Off-board Charging',
                    type: 'radio',
                    defaultValue: 'yes',
                    options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    ],
                    admin: { 
                        layout: 'horizontal',
                        width: "33%",
                        components: {
                            Field: '@/components/fields/RadioField',
                        },
                    },
                },
               {
                    name: 'suspension',
                    label: 'Suspension',
                    type: 'radio',
                    defaultValue: 'yes',
                    options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    ],
                    admin: { 
                        layout: 'horizontal',
                        width: "33%",
                        components: {
                            Field: '@/components/fields/RadioField',
                        },
                    },
                },


            {
              name: 'maxSlope', label: 'Max Slope', type: 'group',
              fields: [
                {
                    type: 'row',
                    fields: [
                        { name: 'value', label: 'Value', type: 'number', admin: { width: '50%' } },
                        { name: 'unit', label: 'Unit', type: 'text', defaultValue: '°', admin: { width: '50%' } },
                    ]
                }               
              ],
            },
            {
              name: 'turningRadius', label: 'Turning Radius', type: 'group',
              fields: [
                  {
                    type: 'row',
                    fields: [
                { name: 'value', label: 'Value', type: 'number', admin: { width: '50%' } },
                {
                  name: 'unit', label: 'Unit', type: 'select', defaultValue: 'mm',
                  options: [{ label: 'mm', value: 'mm' }, { label: 'in', value: 'in' }],
                  admin: { width: '50%' },
                },
                ]
            }
            
            ]
        },
        {
          name: 'tyreType', 
          label: 'Tyre Type', 
          type: 'text',
        },
      ],
    },

    // ─── Dimensions ───────────────────────────────────────────
    {
      name: 'dimensions',
      label: 'Dimensions',
      type: 'group',
      fields: [
        { type: 'row', fields: [
          { name: 'totalLength', label: 'Total Length (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'totalWidth', label: 'Total Width (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'totalHeight', label: 'Total Height (mm)', type: 'number', admin: { width: '33%' } },
        ]},
        { type: 'row', fields: [
          { name: 'foldedHeight', label: 'Folded Height (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'seatWidth', label: 'Seat Width (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'seatDepth', label: 'Seat Depth (mm)', type: 'number', admin: { width: '33%' } },
        ]},
        { type: 'row', fields: [
          { name: 'backrestHeight', label: 'Backrest Height (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'handlebarWidth', label: 'Handlebar Width (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'groundClearance', label: 'Ground Clearance (mm)', type: 'number', admin: { width: '33%' } },
        ]},
        { type: 'row', fields: [
          { name: 'frontWheelDiameter', label: 'Front Wheel Diameter (mm)', type: 'number', admin: { width: '33%' } },
          { name: 'rearWheelDiameter', label: 'Rear Wheel Diameter (mm)', type: 'number', admin: { width: '33%' } },
        ]},
      ],
    },

    // ─── Protection ───────────────────────────────────────────
    {
      name: 'protection',
      label: 'Protection',
      type: 'group',
      fields: [
        { name: 'insurance', label: 'Insurance', type: 'text' },
        { name: 'warranty', label: 'Warranty', type: 'text' },
      ],
    },

    // ─── Promotional ──────────────────────────────────────────
    {
      name: 'promotional',
      label: 'Promotional',
      type: 'group',
      fields: [
        { name: 'tradeIn', label: 'Trade-in', type: 'text' },
        { name: 'finance', label: 'Finance', type: 'text' },
      ],
    },

    // ─── Finishes ─────────────────────────────────────────────
    {
      name: 'finishes',
      label: 'Finishes',
      type: 'group',
      fields: [
        { name: 'finish', label: 'Finish', type: 'text' },
      ],
    },

    // ─── Extra Stats (flexible overflow) ──────────────────────
    {
      name: 'extraStats',
      label: 'Extra Top Line Stats',
      type: 'array',
      admin: {
        description: 'Use this for any additional stats to show in the top line stats section',
      },
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'value', label: 'Value', type: 'text', required: true },
        { name: 'suffix', label: 'Suffix', type: 'text' },
      ],
    },
  ],
}