import express from "express";
import cors from "cors";

import "./database/connect";
import { routesCidade } from "./routes/routesCidades";
import { routesLocal } from "./routes/routesLocais";
import { routesAvaliacao } from "./routes/routesAvaliacoes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesCidade);
app.use(routesLocal);
app.use(routesAvaliacao);

export { app };
