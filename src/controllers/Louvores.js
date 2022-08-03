const Louvor = require("../database/models/Louvor");

const Louvores = {
  all(req, res, next) {
    Louvor.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { titulo, autor, numero } = req.body;

    Louvor.findOrCreate({
      where: {
        numero: numero,
        autor: autor
      },
      defaults: {
        titulo: titulo,
        autor: autor,
        numero: numero
      }
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  }
};

module.exports = Louvores;