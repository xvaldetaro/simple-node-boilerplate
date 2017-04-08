exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('user', function(table) {
      table.increments('id').primary().notNullable();
      table.string('name', 200).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('user');
};
