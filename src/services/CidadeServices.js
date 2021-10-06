import { Op } from "sequelize";
import { Cidade } from "../models/Cidade";

class CidadeServices {
  async index() {
    const cidade = await Cidade.findAll();

    return cidade;
  }

  async show({ nome_cidade }) {
    const cidade = await Cidade.findAll({
      where: {
        nome_cidade: {
          [Op.iLike]: `${nome_cidade}%`,
        },
      },
    });

    return cidade;
  }

  async store({ nome_cidade }) {
    const criarCidade = await Cidade.create({ nome_cidade });

    return criarCidade;
  }
}

export { CidadeServices };
