
exports.up = function(knex) {
  return knex.schema.createTable('avaliacao', table => {
    table.increments('id_avaliacao').primary();
    table.text('nome_usuario');
    table.float('nota');
    table.text('comentario');

    table.integer('id_local');
    table.foreign('id_local').references('praia.id_praia');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('avaliacao');
};
