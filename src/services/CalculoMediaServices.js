import { Local } from "../models/Local";
import { Avaliacao } from "../models/Avaliacao";

async function CalculoMedia({ id_local }) {
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

export { CalculoMedia };
