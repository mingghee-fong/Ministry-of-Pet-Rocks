export async function up(knex) {
  await knex.schema.createTable('owners', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('address')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('owners')
}
