import { Router } from 'express';
import { CidadeController } from '../controllers/CidadeControllers'; 

const routesCidade = Router();
const ciddadeController = new CidadeController();

routesCidade.get('/cidades', ciddadeController.index);
routesCidade.get('/cidades/cidade', ciddadeController.show);

routesCidade.post('/criar-cidade', ciddadeController.store);

export { routesCidade };