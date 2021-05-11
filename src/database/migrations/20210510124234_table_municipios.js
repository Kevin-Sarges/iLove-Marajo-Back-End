
exports.up = function(knex) {
  return knex.schema.createTable('municipios', table => {
    table.text('nome_municipio').notNullable().primary();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('municipios');
};
