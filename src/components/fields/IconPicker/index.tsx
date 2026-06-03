// src/components/fields/IconPicker.tsx
'use client'

import React, { useMemo, useState } from 'react'
import { useField } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'
import { icons, iconNames, type IconName } from '../../icons/registry'
import './style.scss'

const IconPicker: TextFieldClientComponent = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path })
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return iconNames
    return iconNames.filter((n) => n.toLowerCase().includes(q))
  }, [search])

  const label =
    typeof field?.label === 'string' ? field.label : 'Icon'

  return (
    <div className="icon-picker">
      <div className="icon-picker__label">{label}</div>

      <div className="icon-picker__controls">
        <input
          type="text"
          className="icon-picker__search"
          placeholder="Search icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {value && (
          <button
            type="button"
            className="icon-picker__clear"
            onClick={() => setValue(null)}
          >
            Clear
          </button>
        )}
      </div>

      <div className="icon-picker__grid">
        {filtered.map((name) => {
          const LucideIcon = icons[name as IconName]
          const selected = value === name
          return (
            <button
              key={name}
              type="button"
              title={name}
              aria-pressed={selected}
              className={
                'icon-picker__item' +
                (selected ? ' icon-picker__item--selected' : '')
              }
              onClick={() => setValue(name)}
            >
              <LucideIcon className="icon-picker__glyph" />
              <span className="icon-picker__name">{name}</span>
            </button>
          )
        })}
        {filtered.length === 0 && (
          <p className="icon-picker__empty">No icons match “{search}”.</p>
        )}
      </div>
    </div>
  )
}

export default IconPicker