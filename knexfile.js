import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '/db.sqlite'),
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, '/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/seed'),
  },
};
