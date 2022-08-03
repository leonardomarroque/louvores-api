const Contato = require("../database/models/Contato");

const Contatos = {
  all(req, res, next) {
    Contato.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { nome, sobrenome, codigo } = req.body;

    Contato.create({
      nome,
      sobrenome,
      codigo,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  }
};

module.exports = Contatos;