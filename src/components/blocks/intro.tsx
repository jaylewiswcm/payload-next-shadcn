import Link from 'next/link'
import { Button } from '@/components/shadcn/ui/button'
import { ProductIntro } from '@/payload-types'
import Icon from '../icons'

type Props = {
  content: ProductIntro['content']
}

export default function Intro({content}: Props) {
  const { useIcon, heading, body } = content
  return (
    <>
      <section className="section w-full border-b border-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center rounded-lg p-8 text-center md:rounded-xl lg:p-16">
            {useIcon && 
              <Icon name="QuoteMark" className="mb-4 w-20 h-fit" />
            }
            <h3 className="text-5xl font-extrabold mb-8">{heading}</h3>
            <p className="text-2xl font-light text-foreground max-w-screen-lg">{body}</p>
          </div>
        </div>
      </section>
    </>
  )
}
