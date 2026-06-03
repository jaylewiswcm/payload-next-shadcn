// src/fields/SwitchField.tsx
'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'
import type { CheckboxFieldClientComponent } from 'payload'

export const SwitchField: CheckboxFieldClientComponent = ({ field, path }) => {
  const { value, setValue } = useField<boolean>({ path })
  const label = typeof field.label === 'string' ? field.label : field.name

  return (
    <div className="field-type checkbox">
      <label
        htmlFor={path}
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
      >
        <button
          type="button"
          role="switch"
          id={path}
          aria-checked={!!value}
          onClick={() => setValue(!value)}
          style={{
            position: 'relative',
            width: '36px',
            height: '20px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            background: value ? 'var(--theme-success-500)' : 'var(--theme-elevation-150)',
            transition: 'background 0.15s ease',
            padding: 0,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '2px',
              left: value ? '18px' : '2px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'white',
              transition: 'left 0.15s ease',
            }}
          />
        </button>
        <span>{label}</span>
      </label>
    </div>
  )
}

export default SwitchField