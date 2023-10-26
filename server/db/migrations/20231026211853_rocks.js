export async function up(knex) {
  await knex.schema.createTable('rocks', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('rock_type')
    table.string('trait_id')
    table.string('rock_img')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('rocks')
}
