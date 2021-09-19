const { Op } = require('sequelize');
const Cidade =require('../models/Cidade');

module.exports = {
  async index(req, res, next) {
    try {
      const cidade = await Cidade.findAll();

      return res.json(cidade);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { nome_cidade } = req.query;

      const cidade = await Cidade.findAll({
        where: {
          nome_cidade: {
            [Op.iLike]: `${nome_cidade}%`
          }
        }
      });

      return res.json(cidade);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { nome_cidade } = req.body;

      const criarCidade = await Cidade.create({ nome_cidade });

      return res.json(criarCidade);
    } catch (error) {
      next(error);
    }
  }
}