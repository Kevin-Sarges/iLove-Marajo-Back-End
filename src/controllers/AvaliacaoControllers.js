import { AvaliacaoServices } from "../services/AvaliacaoServices";

class AvaliacaoController {
  async index(req, res, next) {
    try {
      const { id_local } = req.params;

      const avaliacao = new AvaliacaoServices();

      const avaliacoesLocais = await avaliacao.index({ id_local });

      return res.json(avaliacoesLocais);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { id_local } = req.params;
      const { nome_usuario, nota, comentario } = req.body;

      const avaliacao = new AvaliacaoServices();

      const avaliarLocal = await avaliacao.store({
        nome_usuario,
        nota,
        comentario,
        id_local,
      });

      return res.status(201).json(avaliarLocal);
    } catch (error) {
      next(error);
    }
  }
}

export { AvaliacaoController };
