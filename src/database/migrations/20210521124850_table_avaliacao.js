
exports.up = function(knex) {
  return knex.schema.createTable('avaliacao', table => {
    table.increments('id_avaliacao').primary();
    table.float('avaliacao');

    table.text('nome_praia');
    table.foreign('nome_praia').references('praia.nome_praia');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('avaliacao');
};
