// @flow

import config from '../knexfile';

const knex = require('knex');
const Model = require('objection').Model;

let connection = null;

const init = () => {
  if (connection) {
    return connection;
  }

  connection = knex(config);

  Model.knex(connection);

  return connection;
};

module.exports = init;
