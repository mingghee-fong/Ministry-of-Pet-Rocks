export async function seed(knex) {
  await knex('users').del()
  await knex('owners').del()
  await knex('rocks').del()
}
