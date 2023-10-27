import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getOwners() {
  return connection('owners').select()
}

export async function getSingleOwner(id) {
  return (
    connection('owners')
      .where('owners.id', id)
      // .join('rocks', 'owners.id', 'rocks.owner_id')
      .select(
        'owners.name as ownerName',
        'owners.email',
        'owners.address',
        'owners.id as ownerId'
      )
  )
  // .first()
}

// export async function getSingleOwner(id) {
//   return connection('owners')
//     .where('owners.id', id)
//     .join('rocks', 'owners.id', 'rocks.owner_id')
//     .select(
//       'owners.name as ownerName',
//       'owners.email',
//       'owners.address',
//       'owners.id as ownerId',
//       'rocks.name as rockName',
//       'rocks.id as rockId',
//       'rocks.rock_type as rockType',
//       'rocks.trait_id as rockTraitId',
//       'rocks.rock_img as rockImg',
//       'rocks.age as rockAge',
//       'rocks.owner_id as rockOwnerId'
//     )
//   // .first()
// }
