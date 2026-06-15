import Link from 'next/link'
import { Button } from '@/components/shadcn/ui/button'
import { Media, OverlayBanner as OverlayBannerType } from '@/payload-types'
import Icon from '../icons'

type Props = {
content: OverlayBannerType['content']
  backgroundImage: OverlayBannerType['backgroundImage']
}

export default function OverlayBanner({content, backgroundImage}: Props) {
  const { heading, body } = content
  return ( 
    <>
      <section className="section relative bg-cover bg-center bg-no-repeat w-full flex flex-col items-end justify-end min-h-[668px] after:absolute after:inset-0 after:z-10 after:block after:size-full after:bg-black/40 after:content-[''] lg:min-h-[800px]"
        style={{
          backgroundImage:
            `url(${(backgroundImage.image as Media)?.url})`,
        }}
        >
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col rounded-lg text-white md:rounded-xl ">
            <h3 className="text-6xl font-extrabold mb-4">{heading}</h3>
            <p className="text-2xl font-light max-w-prose">{body}</p>
          </div>
        </div>
      </section>
    </>
  )
}
