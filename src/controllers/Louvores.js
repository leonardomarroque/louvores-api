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
    const louvor = req.body;

    Louvor.findOrCreate({
      where: {
        numero: louvor.numero,
        autor: louvor.autor
      },
      defaults: {
        titulo: louvor.titulo,
        autor: louvor.autor,
        numero: louvor.numero
      }
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  }
};

module.exports = Louvores;