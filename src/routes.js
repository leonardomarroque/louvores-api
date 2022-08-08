const express = require("express");
const LouvoresController = require("./controllers/Louvores");
const AuthController = require("./controllers/AuthController")

const router = express.Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/louvores", LouvoresController.all);
router.post("/louvores", AuthController.auth, LouvoresController.create);

router.get("/secure", AuthController.auth, (req, res) => {
  res.json({ message: "this is a secure route!", username: req.username });
});

module.exports = router;