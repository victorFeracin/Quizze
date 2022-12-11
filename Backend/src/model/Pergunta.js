const db = require('../database');
const { DataTypes, Model } = require("sequelize");
const { Usuario, GrupoPergunta } = require("./Usuario");

class Pergunta extends Model {}
Pergunta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Id_Pergunta",
    },
    descricao: {
      type: DataTypes.STRING,
      field: "Descricao_Pergunta",
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "Id_Usuario",
      },
      field: "Id_Usuario_Inclusao"
    },
    id_grupo_pergunta: {
      type: DataTypes.INTEGER,
      references: {
        model: GrupoPergunta,
        key: "Id_Grupo_Pergunta",
      },
      field: "Id_Grupo_Pergunta"
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
    modelName: 'Pergunta',
    sequelize: db,
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Pergunta;