import { Router } from "express";
import { LocalController } from "../controllers/LocalControllers";

const routesLocal = Router();
const localController = new LocalController();

routesLocal.get("/cidades/:id_cidade/locais", localController.index);
routesLocal.get("/cidades/:id_cidade/local", localController.locais);
routesLocal.get("/cidades/:id_cidade/local/nome", localController.show);

routesLocal.post("/cidades/:id_cidade/criar-local", localController.store);

export { routesLocal };
