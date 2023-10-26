export async function seed(knex) {
  await knex('rocks').insert([
    {
      id: 1001,
      name: 'Rocky',
      rock_type: 'Sedimentary',
      age: 350,
      trait_id: 1, // Link to a traits table with ID 1
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99901,
    },
    {
      id: 1002,
      name: 'Pebbles',
      rock_type: 'Igneous',
      age: 150,
      trait_id: 2, // Link to a traits table with ID 2
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99901,
    },
    {
      id: 1003,
      name: 'Stoney',
      rock_type: 'Metamorphic',
      age: 200,
      trait_id: 3, // Link to a traits table with ID 3
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99901,
    },
    {
      id: 1004,
      name: 'Rocko',
      rock_type: 'Igneous',
      age: 90,
      trait_id: 4, // Link to a traits table with ID 4
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99902,
    },
    {
      id: 1005,
      name: 'Rockelle',
      rock_type: 'Sedimentary',
      age: 500,
      trait_id: 5, // Link to a traits table with ID 5
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99903,
    },
    {
      id: 1006,
      name: 'Rockford',
      rock_type: 'Igneous',
      age: 120,
      trait_id: 6, // Link to a traits table with ID 6
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99903,
    },
    {
      id: 1007,
      name: 'Petrina',
      rock_type: 'Metamorphic',
      age: 280,
      trait_id: 7, // Link to a traits table with ID 7
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99903,
    },
    {
      id: 1008,
      name: 'Rocky Jr.',
      rock_type: 'Sedimentary',
      age: 250,
      trait_id: 8, // Link to a traits table with ID 8
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99904,
    },
    {
      id: 1009,
      name: 'Pebbleton',
      rock_type: 'Igneous',
      age: 80,
      trait_id: 9, // Link to a traits table with ID 9
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99904,
    },
    {
      id: 1010,
      name: 'Rockina',
      rock_type: 'Metamorphic',
      age: 320,
      trait_id: 10, // Link to a traits table with ID 10
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99905,
    },
    {
      id: 1011,
      name: 'Rocky Balboa',
      rock_type: 'Igneous',
      age: 110,
      trait_id: 11, // Link to a traits table with ID 11
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99906,
    },
    {
      id: 1012,
      name: 'Stony Brook',
      rock_type: 'Sedimentary',
      age: 420,
      trait_id: 12, // Link to a traits table with ID 12
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99907,
    },
    {
      id: 1013,
      name: 'Rocky Road',
      rock_type: 'Metamorphic',
      age: 240,
      trait_id: 13, // Link to a traits table with ID 13
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99907,
    },
    {
      id: 1014,
      name: 'Pebbles Flintstone',
      rock_type: 'Igneous',
      age: 160,
      trait_id: 14, // Link to a traits table with ID 14
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99907,
    },
    {
      id: 1015,
      name: 'Rocky Top',
      rock_type: 'Sedimentary',
      age: 300,
      trait_id: 15, // Link to a traits table with ID 15
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99908,
    },
    {
      id: 1016,
      name: 'Rockhopper',
      rock_type: 'Igneous',
      age: 70,
      trait_id: 16, // Link to a traits table with ID 16
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99908,
    },
    {
      id: 1017,
      name: 'Stonewall',
      rock_type: 'Metamorphic',
      age: 180,
      trait_id: 17, // Link to a traits table with ID 17
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99909,
    },
    {
      id: 1018,
      name: 'Rocky Mountain',
      rock_type: 'Sedimentary',
      age: 400,
      trait_id: 18, // Link to a traits table with ID 18
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99910,
    },
    {
      id: 1019,
      name: 'Pebble Beach',
      rock_type: 'Igneous',
      age: 130,
      trait_id: 19, // Link to a traits table with ID 19
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99910,
    },
    {
      id: 1020,
      name: 'Rocko Rico',
      rock_type: 'Metamorphic',
      age: 260,
      trait_id: 20, // Link to a traits table with ID 20
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99910,
    },
    {
      id: 1021,
      name: 'Rocky Waters',
      rock_type: 'Igneous',
      age: 70,
      trait_id: 21, // Link to a traits table with ID 21
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99910,
    },
    {
      id: 1022,
      name: 'Stony Brooklyn',
      rock_type: 'Sedimentary',
      age: 380,
      trait_id: 22, // Link to a traits table with ID 22
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99911,
    },
    {
      id: 1023,
      name: 'Pebble Pile',
      rock_type: 'Metamorphic',
      age: 210,
      trait_id: 23, // Link to a traits table with ID 23
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99912,
    },
    {
      id: 1024,
      name: 'Rocky Desert',
      rock_type: 'Igneous',
      age: 120,
      trait_id: 24, // Link to a traits table with ID 24
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99913,
    },
    {
      id: 1025,
      name: 'Pebbles Shores',
      rock_type: 'Sedimentary',
      age: 390,
      trait_id: 25, // Link to a traits table with ID 25
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99914,
    },
    {
      id: 1026,
      name: 'Rocky Cliffs',
      rock_type: 'Metamorphic',
      age: 220,
      trait_id: 26, // Link to a traits table with ID 26
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99915,
    },
    {
      id: 1027,
      name: 'Petrified Pete',
      rock_type: 'Igneous',
      age: 140,
      trait_id: 27, // Link to a traits table with ID 27
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99916,
    },
    {
      id: 1028,
      name: 'Rocky Hill',
      rock_type: 'Sedimentary',
      age: 410,
      trait_id: 28, // Link to a traits table with ID 28
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99917,
    },
    {
      id: 1029,
      name: 'Pebble Brook',
      rock_type: 'Metamorphic',
      age: 230,
      trait_id: 29, // Link to a traits table with ID 29
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99918,
    },
    {
      id: 1030,
      name: 'Rocky Valley',
      rock_type: 'Igneous',
      age: 60,
      trait_id: 30, // Link to a traits table with ID 30
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99919,
    },
    {
      id: 1031,
      name: 'Stonehenge',
      rock_type: 'Sedimentary',
      age: 480,
      trait_id: 31, // Link to a traits table with ID 31
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99920,
    },
    {
      id: 1032,
      name: 'Pebble Path',
      rock_type: 'Metamorphic',
      age: 260,
      trait_id: 32, // Link to a traits table with ID 32
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99915,
    },
    {
      id: 1033,
      name: 'Rocky Ridge',
      rock_type: 'Igneous',
      age: 110,
      trait_id: 33, // Link to a traits table with ID 33
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99913,
    },
    {
      id: 1034,
      name: 'Stonewashed',
      rock_type: 'Sedimentary',
      age: 420,
      trait_id: 34, // Link to a traits table with ID 34
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99917,
    },
    {
      id: 1035,
      name: 'Pebble Creek',
      rock_type: 'Metamorphic',
      age: 200,
      trait_id: 35, // Link to a traits table with ID 35
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99917,
    },
    {
      id: 1036,
      name: 'Rocky River',
      rock_type: 'Igneous',
      age: 80,
      trait_id: 36, // Link to a traits table with ID 36
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99920,
    },
    {
      id: 1037,
      name: 'Stoneface',
      rock_type: 'Sedimentary',
      age: 350,
      trait_id: 37, // Link to a traits table with ID 37
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99919,
    },
    {
      id: 1038,
      name: 'Pebble Stone',
      rock_type: 'Metamorphic',
      age: 180,
      trait_id: 38, // Link to a traits table with ID 38
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99919,
    },
    {
      id: 1039,
      name: 'Rockwell',
      rock_type: 'Igneous',
      age: 130,
      trait_id: 39, // Link to a traits table with ID 39
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99913,
    },
    {
      id: 1040,
      name: 'Stonington',
      rock_type: 'Sedimentary',
      age: 300,
      trait_id: 40, // Link to a traits table with ID 40
      rock_img:
        'https://media.gq.com/photos/590ca028f817d5612dbea34b/16:9/w_1280,c_limit/The-Rock-0617-GQ-CV03-01.jpg',
      owner_id: 99914,
    },
  ])
}
