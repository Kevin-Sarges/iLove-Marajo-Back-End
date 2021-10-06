import { Router } from "express";
import { AvaliacaoController } from "../controllers/AvaliacaoControllers";

const routesAvaliacao = Router();
const avaliacaoController = new AvaliacaoController();

routesAvaliacao.get(
  "/avaliacao/:id_local/avaliacoes",
  avaliacaoController.index
);

routesAvaliacao.post("/avaliacao/:id_local/avaliar", avaliacaoController.store);

export { routesAvaliacao };
