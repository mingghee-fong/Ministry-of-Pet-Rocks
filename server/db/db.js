import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getOwners() {
  return connection('owners').select()
}

export async function getSingleOwner(id) {
  return connection('owners').where('owners.id', id).first()
}
