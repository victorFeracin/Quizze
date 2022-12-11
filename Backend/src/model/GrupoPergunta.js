const db = require('../database');
const { DataTypes, Model } = require("sequelize");
const { Usuario } = require("./Usuario");

class GrupoPergunta extends Model {}
GrupoPergunta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Id_Grupo_Pergunta",
    },
    titulo: {
      type: DataTypes.STRING,
      field: "Titulo_Grupo_Pergunta", 
    },
    descricao: {
      type: DataTypes.STRING,
      field: "Descricao_Grupo_Pergunta",
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "Id_Usuario",
      },
      field: "Id_Usuario_Inclusao"
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
    modelName: 'Grupo_Pergunta',
    sequelize: db,
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = GrupoPergunta;