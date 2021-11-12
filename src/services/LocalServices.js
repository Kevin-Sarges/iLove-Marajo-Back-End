import { Op } from "sequelize";
import { Cidade } from "../models/Cidade";
import { Local } from "../models/Local";
import { Avaliacao } from "../models/Avaliacao";
import sequelize from "sequelize";

class LocalServices {
  async index({ id_cidade, id_local }) {
    const local = await Local.findAll({
      where: { id_cidade },

      include: {
        association: "avaliacoes",
      },

      attributes: {
        include: [[sequelize.fn("avg", sequelize.col("nota")), "valor"]],
      },

      group: ["avaliacoes.id", "Local.id"],
    });

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

    const media = somaNotas / totalAvaliacao;
    local.push({ avaliação: media.toFixed(1) }).toString();

    console.log(totalAvaliacao);
    console.log(somaNotas);
    console.log(media);

    return local;

    // const cidade = await Cidade.findByPk(id_cidade, {
    //   include: {
    //     association: "local",

    //     include: {
    //       association: "avaliacoes",
    //     },
    //   },
    // });

    // if (cidade === null) {
    //   return res.status(404).json({ Error: "Cidade não encontrado" });
    // }

    // return cidade.local;
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
