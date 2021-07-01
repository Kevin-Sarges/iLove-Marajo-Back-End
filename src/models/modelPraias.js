const knex = require('../database');
const Praia = require('./class/classPraia');

class Praias extends Praia {
  constructor(nome_praia, foto, lat, lon, descricao, municipio) {
    super(nome_praia, foto, lat, lon, descricao, municipio);
  };

  async salvar() {
    await knex.table('praia').insert({
      nome_praia: this._nomePraia,
      foto: this._foto,
      lat: this._lat,
      lon: this._lon,
      descricao: this._descricao,
      municipio: this._municipio,
    });
  };
}

module.exports = Praias;