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
        if (result[1]) {
          res.status(201).json(result[0]);
        } else {
          res.status(200).json({ codErro: "0001", descricaoErro: "Já existe um louvor com o mesmo número e mesmo autor." });
        }
      })
      .catch(next);
  }
};

module.exports = Louvores;