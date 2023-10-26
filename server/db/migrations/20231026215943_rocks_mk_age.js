export async function up(knex) {
  await knex.schema.alterTable('rocks', (table) => {
    table.string('age')
  })
}

export async function down(knex) {
  await knex.schema.alterTable('rocks', (table) => {
    table.dropColumn('age')
  })
}
