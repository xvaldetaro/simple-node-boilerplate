// @flow

import knex from '~/src/knex';
import User from '~/src/User';

knex();

User.query().then(users => {
  console.log(users[0].name);
  process.exit();
});

console.log('fetching user:');
