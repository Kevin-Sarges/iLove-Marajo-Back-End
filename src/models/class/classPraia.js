class Praia {
  constructor(nome_praia, foto, lat, lon, descricao, municipio) {
    this.nome_praia = nome_praia;
    this.foto = foto;
    this.lat = lat;
    this.lon = lon;
    this.descricao = descricao;
    this.municipio = municipio;
  };

  
  set(nome_praia) {
    this._nomePraia = nome_praia;
  };

  set(foto) {
    this._foto = foto;
  };

  set(lat) {
    this._lat = lat;
  };

  set(lon) {
    this._lon = lon;
  };

  set(descricao) {
    this._descricao = descricao;
  };

  set(municipio) {
    this._municipio = municipio;
  };

  salvar(){};
}

module.exports = Praia;