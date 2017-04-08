// @flow

import knexInit from '~/src/knex';
import User from '~/src/User';

const knex = knexInit();

async function clear(): Promise<any> {
  await knex('user').del();
}

export default async function seed(): Promise<void> {
  await clear();
  await User.query().insert({name: 'Alex'});
}
