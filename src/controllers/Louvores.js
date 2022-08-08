const Louvor = require("../database/models/Louvor");

const Louvores = {
  all(req, res, next) {
    Louvor.findAll({
      order: [
        ['autor', 'ASC'],
        ['numero', 'ASC']
      ]
    })
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
        numero: louvor.numero,
        categoria: louvor.categoria
      }
    })
      .then((result) => {
        if (result[1]) {
          res.status(201).json(result[0]);
        } else {
          res.status(200).json({ error: "Existe um louvor com o mesmo número e autor" });
        }
      })
      .catch(next);
  }
};

module.exports = Louvores;