
exports.up = function(knex) {
  return knex.schema.createTable('municipios', table => {
    table.increments('id_municipios').primary();
    table.string('nome_municipios').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('municipios');
};
