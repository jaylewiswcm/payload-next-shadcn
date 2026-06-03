'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'
import type { RadioFieldClientComponent } from 'payload'

export const RadioField: RadioFieldClientComponent = ({ field, path }) => {
  const { value, setValue } = useField<string>({ path })
  const options = field.options || []
  const label = typeof field.label === 'string' ? field.label : field.name

  return (
    <div className="field-type radio-group">
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
      <div
        role="radiogroup"
        style={{
          display: 'inline-flex',
          padding: '3px',
          borderRadius: '8px',
          background: 'var(--theme-elevation-100)',
          border: '1px solid var(--theme-elevation-150)',
        }}
      >
        {options.map((opt) => {
          const optValue = typeof opt === 'string' ? opt : opt.value
          const optLabel = typeof opt === 'string' ? opt : (opt.label as string)
          const isActive = value === optValue
          return (
            <button
              key={optValue}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => setValue(optValue)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                background: isActive ? 'var(--theme-elevation-300)' : 'transparent',
                color: isActive ? 'var(--theme-text)' : 'var(--theme-elevation-800)',
                transition: 'all 0.15s ease',
              }}
            >
              {optLabel}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default RadioField;