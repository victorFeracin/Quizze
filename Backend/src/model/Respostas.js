const db = require('../database');
const { DataTypes, Model } = require("sequelize");
const { Usuario, GrupoPergunta } = require("./Usuario");
const { Pergunta } = require("./Pergunta");

class Respostas extends Model {}
Respostas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Id_Resposta",
    },
    descricao: {
      type: DataTypes.STRING,
      field: "Descricao_Resposta",
    },
    correta: {
      type: DataTypes.STRING,
      field: "Correta",
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "Id_Usuario",
      },
      field: "Id_Usuario_Inclusao"
    },
    id_pergunta: {
      type: DataTypes.INTEGER,
      references: {
        model: Pergunta,
        key: "Id_Pergunta",
      },
      field: "Id_Pergunta"
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
    modelName: 'Respostas',
    sequelize: db,
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Respostas;