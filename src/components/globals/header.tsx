import { fetchHeader } from '@/lib/payload/fetchGlobals'
import { Header } from '@/payload-types'
// ShadCn
import { Navbar3 } from '../shadcn/blocks/navbar3'

export default async function HeaderPage() {
  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`

  let data: Header | null = null
  try {
    data = await fetchHeader()
  } catch (error) {
    console.error(error)
  } 

  console.log('Header: ', data);

  if (!data) {
    return <></>
  }

  
  return (
    <Navbar3 header={data}/>
  )
}
