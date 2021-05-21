
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avaliacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('avaliacao').insert([
        {
          avaliacao: 4.5,
          nome_praia: 'Praia Grande'
        },

        {
          avaliacao: 4.5,
          nome_praia: 'Praia Portinho'
        }
      ]);
    });
};
