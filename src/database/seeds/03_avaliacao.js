
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avaliacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('avaliacao').insert([
        {
          avaliacao: 4.5,
          id_praia: 1
        },

        {
          avaliacao: 4.5,
          id_praia: 2
        }
      ]);
    });
};
