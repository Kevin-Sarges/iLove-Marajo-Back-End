const knex = require('../database');
const Municipio = require('./class/classMunicipio');

class Municipios extends Municipio {
  constructor(nome_municipio) {
    super(nome_municipio);
  };

  async salvar() {
    await knex.table('municipio').insert({
      nome_municipio: this._nomeMunicipio 
    });
  };
}

module.exports = Municipios;