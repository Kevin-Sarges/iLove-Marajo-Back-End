import { LocalServices } from '../services/LocalServices';

class LocalController {
  async index(req, res, next) {
    try {
      const { id_cidade } = req.params;
      
      const local = new LocalServices();
      
      const listandoLocalis = await local.index({ id_cidade });

      return res.json(listandoLocalis);
    } catch (error) {
      next(error);
    }
  };

  async locais(req, res, next) {
    try {
      const { id_cidade } = req.params;
      const { local } = req.query;

      const locais = new LocalServices();

      const buscandoLocal = await locais.locais({ id_cidade, local });

      return res.json(buscandoLocal);
    } catch (error) {
      next(error);
    }
  };

  async show(req, res, next) {
    try {
      const { id_cidade } = req.params;
      const { nome_local } = req.query;

      const locais = new LocalController();

      const buscandoNomeLocal = await locais.show({ id_cidade, nome_local });

      return res.json(buscandoNomeLocal);
    } catch (error) {
      next(error);
    }
  };

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

      const locais = new LocalServices();

      const criandoLocal = await locais.store({ 
        local,
        nome_local,
        foto,
        lat,
        lon,
        descricao,
        id_cidade
      });

      return res.status(201).json(criandoLocal);
    } catch (error) {
      next(error);
    }
  }
}

export { LocalController };