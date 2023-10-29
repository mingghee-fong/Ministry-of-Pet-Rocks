export async function up(knex) {
  await knex.schema.alterTable('rocks', (table) => {
    table.string('owner_id')
  })
}

export async function down(knex) {
  await knex.schema.alterTable('rocks', (table) => {
    table.dropColumn('owner_id')
  })
}
