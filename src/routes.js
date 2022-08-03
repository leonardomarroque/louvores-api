const Router = require("express");
const Contatos = require("./controllers/Contatos");

const router = Router();

router.get("/contatos", Contatos.all);

module.exports = router;