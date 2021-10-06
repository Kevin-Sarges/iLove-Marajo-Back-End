import { CidadeServices } from "../services/CidadeServices";

class CidadeController {
  async index(req, res, next) {
    try {
      const cidade = new CidadeServices();

      const listando = await cidade.index();

      return res.json(listando);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { nome_cidade } = req.query;

      const cidade = new CidadeServices();

      const buscandoCidade = await cidade.show({ nome_cidade });

      return res.json(buscandoCidade);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { nome_cidade } = req.body;

      const cidade = new CidadeServices();

      const criandoCidade = await cidade.store({ nome_cidade });

      return res.status(201).json(criandoCidade);
    } catch (error) {
      next(error);
    }
  }
}

export { CidadeController };
