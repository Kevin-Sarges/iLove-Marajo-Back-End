
exports.up = function(knex) {
  return knex.schema.createTable('municipios', table => {
    table.increments('id_municipio').notNullable().primary();
    table.text('nome_municipio').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('municipios');
};
