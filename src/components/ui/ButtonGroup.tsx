import Link from 'next/link'
import { LinkFieldType } from '../fields/LinkField'
import { ArrowRight } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import MSButton from './Button'


type ButtonProps = {
    buttons: {
      id?: string | null
      link?: LinkFieldType | null
    }[]
    className?: string
}

export default function ButtonGroup({buttons, className}: ButtonProps) {

  return (
    <div className={`button-group ${className ?? ''}`}>
      {buttons && buttons.map((button, index) => 
        <MSButton link={button.link} primary={index == 0} key={index} className=""/>
        )}
    </div>
  )
}
