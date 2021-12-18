import { Local } from "../models/Local";
import { Avaliacao } from "../models/Avaliacao";

class AvaliacaoServices {
  async index({ id_local }) {
    const totalAvaliacao = await Avaliacao.count({
      where: {
        id_local,
      },
    });

    const somaNotas = await Avaliacao.sum("nota", {
      where: {
        id_local,
      },
    });

    const local = await Local.findAll({
      include: {
        association: "avaliacoes",

        where: {
          id_local,
        },
      },
    });

    if (local === null) {
      return res.status(404).json({ error: "Avaliações não encontradas" });
    }

    const media = somaNotas / totalAvaliacao;

    local.push({ avaliação: media.toFixed(1) });

    return local;
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
