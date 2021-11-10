import { Local } from "../models/Local";
import { Avaliacao } from "../models/Avaliacao";
import sequelize, { Op } from "sequelize";

class AvaliacaoServices {
  async index({ id_local }) {
    const totalAvaliacao = await Avaliacao.count();

    const somaNotas = await Avaliacao.sum("nota");

    const local = await Local.findAll({
      where: { id: id_local },

      include: {
        association: "avaliacoes",
      },

      attributes: {
        include: [
          [sequelize.fn("avg", sequelize.col("avaliacoes.nota")), "media"],
        ],
      },

      group: ["avaliacoes.id", "Local.id"],
    });

    if (local === null) {
      return res.status(404).json({ error: "Avaliações não encontradas" });
    }

    const media = somaNotas / totalAvaliacao;

    console.log(somaNotas);
    console.log(totalAvaliacao);
    console.log(media);

    return "kkkkk";
  }

  async store({ nome_usuario, nota, comentario, id_local }) {
    const local = await Local.findByPk(id_local);

    if (!local) {
      return res.status(404).json({ error: "Local não encontrado" });
    }

    const avaliarLocal = await Avaliacao.create({
      nome_usuario,
      nota,
      comentario,
      id_local,
    });

    return avaliarLocal;
  }
}

export { AvaliacaoServices };
