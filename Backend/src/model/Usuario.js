const db = require('../database');
const { DataTypes, Model } = require("sequelize");

class Usuario extends Model {}
Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Id_Usuario",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Email",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "Senha",
    },
    name: {
      type: DataTypes.STRING,
      field: "Nome",
    },
    userType: {
      type: DataTypes.STRING,
      field: "Tipo_Usuario",
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
    modelName: 'Usuario',
    sequelize: db,
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Usuario;