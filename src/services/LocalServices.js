import { Op } from "sequelize";
import { Cidade } from "../models/Cidade";
import { Local } from "../models/Local";

class LocalServices {
  async index({ id_cidade }) {
    const cidade = await Cidade.findByPk(id_cidade, {
      include: {
        association: "local",
      },
    });

    if (cidade === null) {
      return res.status(404).json({ Error: "Cidade não encontrado" });
    }

    return cidade;
  }

  async locais({ id_cidade, local }) {
    const buscaLocal = await Cidade.findAll({
      where: { id: id_cidade },

      include: [
        {
          association: "local",
          where: {
            local: {
              [Op.iLike]: `${local}%`,
            },
          },
        },
      ],
    });

    return buscaLocal;
  }

  async show({ id_cidade, nome_local }) {
    const buscandoNomeLocal = await Cidade.findAll({
      where: { id: id_cidade },

      include: [
        {
          association: "local",
          where: {
            nome_local: {
              [Op.iLike]: `%${nome_local}%`,
            },
          },
        },
      ],
    });

    return buscandoNomeLocal;
  }

  async store({ local, nome_local, foto, lat, lon, descricao, id_cidade }) {
    const cidade = await Cidade.findByPk(id_cidade);

    if (!cidade) {
      return res.status(400).json({ error: "Cidade não encontrada" });
    }

    const criarLocal = await Local.create({
      local,
      nome_local,
      foto,
      lat,
      lon,
      descricao,
      id_cidade,
    });

    return criarLocal;
  }
}

export { LocalServices };
