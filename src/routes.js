const express = require("express");
const ContatosController = require("./controllers/Contatos");

const router = express.Router();

router.get("/contatos", ContatosController.all);
router.post("/contatos", ContatosController.create);

module.exports = router;