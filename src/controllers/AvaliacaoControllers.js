const Local = require('../models/Local');
const Avaliacao = require('../models/Avaliacao');

module.exports = {
  async index(req, res, next) {
    try {
      const { id_local } = req.params;

      const local = await Local.findByPk(id_cidade, {
        include: {
          association: 'avaliacoes'
        }
      });

      if(local === null) {
        return res.status(404).json({ error: 'Avaliações não encontradas' });
      }

      return res.json(local);
    } catch (error) {
      next(error);
    }
  },

  async store(rea, res, next) {
    try {
      const { id_local } = req.params;
      const { 
        nome_usuario,
        nota,
        comentario
      } = req.body;

      const local = await Local.findByPk(id_local);

      if(!local) {
        return res.status(404).json({ error: 'Local não encontrado' });
      }

      const avaliarLocal = await Avaliacao.create({ 
        nome_usuario,
        nota,
        comentario,
        id_local
      })

      return res.json(avaliarLocal);
    } catch (error) {
      next(error);
    }
  }
}