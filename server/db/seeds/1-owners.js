export async function seed(knex) {
  await knex('owners').insert([
    {
      id: 99901,
      name: 'John Apple',
      email: 'john.apple@example.org',
      address: '123 Main Street, Auckland, New Zealand',
      // rock_id: [1001, 1002], // John Apple owns pet rocks with IDs 1001 and 1002
    },
    {
      id: 99902,
      name: 'Mary Bird',
      email: 'mary.bird@example.org',
      address: '456 Elm Avenue, Wellington, New Zealand',
      // rock_id: [1003], // Mary Bird owns pet rock with ID 1003
    },
    {
      id: 99903,
      name: 'David Stone',
      email: 'david.stone@example.org',
      address: '789 Oak Road, Christchurch, New Zealand',
      // rock_id: [1004, 1005], // David Stone owns pet rocks with IDs 1004 and 1005
    },
    {
      id: 99904,
      name: 'Lisa Fox',
      email: 'lisa.fox@example.org',
      address: '101 Pine Lane, Dunedin, New Zealand',
      // rock_id: [1006], // Lisa Fox owns pet rock with ID 1006
    },
    {
      id: 99905,
      name: 'Robert King',
      email: 'robert.king@example.org',
      address: '202 Cedar Street, Queenstown, New Zealand',
      // rock_id: [1007, 1008], // Robert King owns pet rocks with IDs 1007 and 1008
    },
    {
      id: 99906,
      name: 'Jennifer Rose',
      email: 'jennifer.rose@example.org',
      address: '303 Birch Road, Hamilton, New Zealand',
      // rock_id: [1009], // Jennifer Rose owns pet rock with ID 1009
    },
    {
      id: 99907,
      name: 'Michael Stone',
      email: 'michael.stone@example.org',
      address: '404 Willow Lane, Tauranga, New Zealand',
      // rock_id: [1010, 1011, 1040], // Michael Stone owns pet rocks with IDs 1010 and 1011
    },
    {
      id: 99908,
      name: 'Susan Hill',
      email: 'susan.hill@example.org',
      address: '505 Maple Avenue, Napier, New Zealand',
      // rock_id: [1012, 1013], // Susan Hill owns pet rocks with IDs 1012 and 1013
    },
    {
      id: 99909,
      name: 'William Moon',
      email: 'william.moon@example.org',
      address: '606 Oak Street, Palmerston North, New Zealand',
      // rock_id: [1014], // William Moon owns pet rock with ID 1014
    },
    {
      id: 99910,
      name: 'Elizabeth Fox',
      email: 'elizabeth.fox@example.org',
      address: '707 Pine Road, Rotorua, New Zealand',
      // rock_id: [1015, 1016], // Elizabeth Fox owns pet rocks with IDs 1015 and 1016
    },
    {
      id: 99911,
      name: 'James Wolf',
      email: 'james.wolf@example.org',
      address: '808 Elm Lane, Nelson, New Zealand',
      // rock_id: [1017], // James Wolf owns pet rock with ID 1017
    },
    {
      id: 99912,
      name: 'Karen Rose',
      email: 'karen.rose@example.org',
      address: '909 Cedar Avenue, New Plymouth, New Zealand',
      // rock_id: [1018, 1019, 1038, 1039], // Karen Rose owns pet rocks with IDs 1018 and 1019
    },
    {
      id: 99913,
      name: 'Matthew Wood',
      email: 'matthew.wood@example.org',
      address: '1010 Birch Road, Invercargill, New Zealand',
      // rock_id: [1020], // Matthew Wood owns pet rock with ID 1020
    },
    {
      id: 99914,
      name: 'Patricia Stone',
      email: 'patricia.stone@example.org',
      address: '1111 Willow Street, Whangarei, New Zealand',
      // rock_id: [1021, 1022, 1037], // Patricia Stone owns pet rocks with IDs 1021 and 1022
    },
    {
      id: 99915,
      name: 'Richard Hill',
      email: 'richard.hill@example.org',
      address: '1212 Maple Avenue, Gisborne, New Zealand',
      // rock_id: [1023], // Richard Hill owns pet rock with ID 1023
    },
    {
      id: 99916,
      name: 'Linda Brown',
      email: 'linda.brown@example.org',
      address: '1313 Oak Lane, Hastings, New Zealand',
      // rock_id: [1024, 1025, 1036], // Linda Brown owns pet rocks with IDs 1024 and 1025
    },
    {
      id: 99917,
      name: 'Thomas Stone',
      email: 'thomas.stone@example.org',
      address: '1414 Pine Road, Timaru, New Zealand',
      // rock_id: [1026], // Thomas Stone owns pet rock with ID 1026
    },
    {
      id: 99918,
      name: 'Nancy Moon',
      email: 'nancy.moon@example.org',
      address: '1515 Cedar Road, Blenheim, New Zealand',
      // rock_id: [1027, 1028], // Nancy Moon owns pet rocks with IDs 1027 and 1028
    },
    {
      id: 99919,
      name: 'Daniel Rose',
      email: 'daniel.rose@example.org',
      address: '1616 Elm Street, Whanganui, New Zealand',
      // rock_id: [1029, 1033, 1034, 1035], // Daniel Rose owns pet rock with ID 1029
    },
    {
      id: 99920,
      name: 'Karen Fox',
      email: 'karen.fox@example.org',
      address: '1717 Birch Avenue, Taupo, New Zealand',
      // rock_id: [1030, 1031, 1032], // Karen Fox owns pet rocks with IDs 1030 and 1031
    },
    // (and so on for the remaining owners)
  ])
}
