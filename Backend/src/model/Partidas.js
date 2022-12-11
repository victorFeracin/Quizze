const db = require('../database');
const { DataTypes, Model } = require("sequelize");
const { Usuario, GrupoPergunta } = require("./Usuario");

class Partidas extends Model {}
Partidas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Id_Partidas",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "Data_Inclusao",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "Data_Alteracao",
    }
  },
  {
    modelName: 'Partidas',
    sequelize: db,
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Partidas;