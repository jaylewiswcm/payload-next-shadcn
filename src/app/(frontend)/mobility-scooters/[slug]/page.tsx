import { fetchPage } from '@/lib/payload/fetchPage'
import { fetchPages } from '@/lib/payload/fetchPages'
import { notFound } from 'next/navigation'
import Blocks from '@/components/blocks/blocks'
import type { Metadata } from 'next'
import type { Scooter } from '@/payload-types'
import { fetchScooters } from '@/lib/payload/fetchScooters'
import { fetchScooter } from '@/lib/payload/fetchScooter'
import Form from '@/components/forms'

export async function generateStaticParams() {
  let scooters: Scooter[] | undefined = undefined

  try {
    scooters = await fetchScooters()
  } catch (error) {
    console.error(error)
  }

  if (!scooters || scooters.length === 0) {
    return [{ slug: 'not-found' }]
  }

  const params = scooters
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug
  let scooter: Scooter | undefined = undefined

  if (slug === 'home') {
    return notFound()
  }

  try {
    scooter = await fetchScooter(slug)
  } catch (error) {
    console.error(error)
  }

  if (!scooter) {
    return notFound()
  }

  const { layout } = scooter


  return (
    <div>
      <Blocks blocks={layout} product={scooter} />
      <Form />
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const page = await fetchScooter(slug)

  if (!page) {
    return {
      title: 'not found',
    }
  }

  return {
    title: page.productName,
  }
}
