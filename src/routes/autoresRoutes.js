import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listaAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);

export default routes;