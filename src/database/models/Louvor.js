const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Louvor = sequelize.define("louvor", {
  titulo: DataTypes.STRING,
  autor: DataTypes.STRING,
  numero: DataTypes.INTEGER,
});

const init = async () => {
  await Louvor.sync();
};

init();

module.exports = Louvor;