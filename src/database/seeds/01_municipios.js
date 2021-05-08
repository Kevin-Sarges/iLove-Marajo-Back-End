
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('municipios').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipios').insert([
        { nome_municipios: "Salvaterra" },
      ]);
    });
};
