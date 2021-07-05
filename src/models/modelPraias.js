const knex = require('../database/connect');
const Praia = require('./class/classPraia');

class Praias extends Praia {
  constructor(nome_praia, foto, lat, lon, descricao, id_municipio) {
    super(nome_praia, foto, lat, lon, descricao, id_municipio);
  };

  async salvar() {
    await knex.table('praia').insert({
      nome_praia: this._nomePraia,
      foto: this._foto,
      lat: this._lat,
      lon: this._lon,
      descricao: this._descricao,
      id_municipio: this._idMunicipio,
    });
  };
}

module.exports = Praias;