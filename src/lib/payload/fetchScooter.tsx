import { getPayload } from 'payload'
import config from '@payload-config'

export const fetchScooter = async (slug: string, preview: boolean = false) => {
  const query = {
    slug: {
      equals: slug,
    },
  }

  /// payload local
  const payload = await getPayload({ config })

  const scooters = await payload.find({
    collection: 'scooters',
    draft: preview,
    limit: 1000,
    overrideAccess: preview,
    pagination: false,
    where: query,
    
  })

  const scooter = scooters.docs[0]

  return scooter
}
