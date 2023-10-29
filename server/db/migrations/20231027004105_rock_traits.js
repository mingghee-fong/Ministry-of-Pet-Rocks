export async function up(knex) {
  await knex.schema.createTable('rockTraits', (table) => {
    table.increments('id').primary()
    table.string('trait')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('rockTraits')
}
