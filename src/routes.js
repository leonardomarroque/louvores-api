import Router from "express";
import Contatos from "./controllers/Contatos.js";

const router = Router();

router.get("/contatos", Contatos.all);

export default router;