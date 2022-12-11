const Usuario = require('./Usuario');
const GrupoPergunta = require('./GrupoPergunta');
const Pergunta = require('./Pergunta');

GrupoPergunta.belongsTo(Usuario, {
  foreignKey: "id_usuario"
});

Pergunta.belongsTo(Usuario, {
  foreignKey: "id_usuario"
});

Pergunta.belongsTo(GrupoPergunta, {
  foreignKey: "id_grupo_pergunta"
});

module.exports = {
  Usuario,
  GrupoPergunta,
  Pergunta,
}