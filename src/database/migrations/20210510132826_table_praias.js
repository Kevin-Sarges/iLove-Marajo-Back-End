
exports.up = function(knex) {
  return knex.schema.createTable('praia', table => {
    table.increments('id_praia').primary();
    table.text('nome_praia').notNullable();
    table.text('descricao').notNullable();
    table.text('foto').notNullable();
    table.text('lat').notNullable();
    table.text('lon').notNullable();

    table.integer('id_avaliacao').notNullable();
    table.foreign('id_avaliacao').references('avaliacao.id_avaliacao');
    table.text('municipio').notNullable();
    table.foreign('municipio').references('municipios.nome_municipio');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('praia');
};
