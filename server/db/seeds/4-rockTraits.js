export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('rockTraits').del()
  await knex('rockTraits').insert([
    { id: 1, trait: 'Unique collector item, radioactive' },
    { id: 2, trait: 'Calming desk companion, great for skipping' },
    { id: 3, trait: 'Versatile, decorative and deadly' },
    { id: 4, trait: 'Smooth, gentle masterpiece, WWE superstar' },
    { id: 5, trait: 'Loyal silent guardian, killed goliath' },
  ])
}
