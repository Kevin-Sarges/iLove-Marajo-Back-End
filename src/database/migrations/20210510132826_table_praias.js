
exports.up = function(knex) {
  return knex.schema.createTable('praias', table => {
    table.increments('id_praia').notNullable().primary();
    table.text('nome_praia').notNullable();
    table.text('descricao').notNullable();
    table.text('foto').notNullable();
    table.text('lat').notNullable();
    table.text('lon').notNullable();

    table.integer('id_municipio').notNullable();
    table.foreign('id_municipio').references('municipios.id_municipio');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('praias');
};
