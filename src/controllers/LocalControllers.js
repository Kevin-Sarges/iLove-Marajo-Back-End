const { Op } = require('sequelize');
const Cidade = require('../models/Cidade');
const Local = require('../models/Local');

module.exports = {
  async index(req, res, next) {
    try {
      const { id_cidade } = req.params;
      
      const cidade = await Cidade.findByPk(id_cidade, {
        include: {
          association: 'local',
        }
      });

      if(cidade === null) {
        return res.status(404).json({ Error: 'Local não encontrado' });
      }

      return res.json(cidade);
    } catch (error) {
      next(error);
    }
  },

  async locais(req, res, next) {
    try {
      const { id_cidade } = req.params;
      const { local } = req.query;

      const buscaLocal = await Cidade.findAll({
        where: { id: id_cidade },

        include: [
          {
            association: 'local',
            where: {
              local: {
                [Op.iLike]: `${ local }%`
              }
            }
          }
        ]
      });

      return res.json(buscaLocal);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { id_cidade } = req.params;
      const { nome_local } = req.query;

      const buscandoNomeLocal = await Cidade.findAll({
        where: { id: id_cidade },

        include: [
          {
            association: 'local',
            where: {
              nome_local: {
                [Op.iLike]: `${ nome_local }%`
              }
            }
          }
        ]
      });

      return res.json(buscandoNomeLocal);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { id_cidade } = req.params;
      const {
        local,
        nome_local,
        foto,
        lat,
        lon,
        descricao
      } = req.body;

      const cidade = await Cidade.findByPk(id_cidade);

      if(!cidade) {
        return res.status(400).json({ error: 'Cidade não encontrada' });
      }

      const criarLocal = await Local.create({
        local,
        nome_local,
        foto,
        lat,
        lon,
        descricao,
        id_cidade
      });

      return res.json(criarLocal);
    } catch (error) {
      next(error);
    }
  }
}