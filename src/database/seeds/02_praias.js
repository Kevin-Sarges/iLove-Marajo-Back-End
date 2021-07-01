
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('praia').del()
    .then(function () {
      // Inserts seed entries
      return knex('praia').insert([
        {
          id_praia: 1,
          nome_praia: 'Praia Grande',
          descricao: 'A praia é uma das mais famosas da ilha e tem diversos bares que oferecem saborosos drinques e petiscos, além de restaurantes com iguarias paraenses, como o famoso peixe frito com açaí(fruta típica da região), tudo isso animado ao som de uma boa música com ritmos locais, como o carimbó e o tecnobrega.',
          foto: 'https://firebasestorage.googleapis.com/v0/b/ilove-820df.appspot.com/o/Salvaterra%2FPontos%2FPraiaGrande.jpg?alt=media&token=8f9ee9fa-8091-4cb5-b752-e1bd6101798f',
          lat: '-0.7628496',
          lon: '-48.511852',
          municipio: 'Salvaterra',
        },

        {
          id_praia: 2,
          nome_praia: 'Praia Portinho',
          descricao: 'A belíssima praia do portinho de Salvaterra fica a menos de 500m do centro do município de Salvaterra, na ilha do marajó, litoral do estado do Pará. O local é perfeito para quem quer aproveitar os dias de descanso em meio a muito sol e natureza.',
          foto: 'https://firebasestorage.googleapis.com/v0/b/ilove-820df.appspot.com/o/Salvaterra%2FPontos%2FPortinho.PNG?alt=media&token=845b28db-8f62-49ae-af79-d3d2992bd4de',
          lat: '-0.7528755',
          lon: '-48.511443',
          municipio: 'Salvaterra',
        }
      ]);
    });
};
