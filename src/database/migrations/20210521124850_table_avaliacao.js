
exports.up = function(knex) {
  return knex.schema.createTable('avaliacao', table => {
    table.increments('id_avaliacao').primary();
    table.float('nota');
    table.text('comentario');

    table.integer('id_praia');
    table.foreign('id_praia').references('praia.id_praia');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('avaliacao');
};
