const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Contato = sequelize.define("contato", {
  nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
  codigo: DataTypes.INTEGER,
});

//create table if not exists...
const init = async () => {
  await Contato.sync();
};

init();

module.exports = Contato;