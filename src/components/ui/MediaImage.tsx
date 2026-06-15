// components/Media.tsx
import type { Media } from '@/payload-types'
import Image from 'next/image'

type MediaImageProps = {
  image: Media | number | null | undefined
  className?: string
  sizes?: string
}

const MediaImage = ({ image, className, sizes }: MediaImageProps) => {
  if (!image || typeof image === 'number') return null

  return (
    <Image
      src={image.url!}
      alt={image.alt}
      width={image.width!}
      height={image.height!}
      className={className}
      sizes={sizes}
    />
  )
}

export default MediaImage 