import { getPayload } from 'payload'
import config from '@payload-config'

export const fetchScooters = async (preview: boolean = false) => {
  /// payload local
  const payload = await getPayload({ config })

  const data = await payload.find({
    collection: 'scooters',
    draft: preview,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
  })

  const scooters = data.docs

  return scooters
}
