export async function up(knex) {
  await knex.schema.alterTable('owners', (table) => {
    // table.increments('id').primary()
    // table.string('name')
    // table.string('email')
    // table.string('address')
    table.string('rock_id')
  })
}

export async function down(knex) {
  await knex.schema.alterTable('owners', (table) => {
    table.dropColumn('rock_id')
  })
}
