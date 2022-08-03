const express = require("express");
const LouvoresController = require("./controllers/Louvores");

const router = express.Router();

router.get("/louvores", LouvoresController.all);
router.post("/louvores", LouvoresController.create);

module.exports = router;