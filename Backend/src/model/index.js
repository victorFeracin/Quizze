const Usuario = require('./Usuario');
const GrupoPergunta = require('./GrupoPergunta');
const Pergunta = require('./Pergunta');
const Respostas = require('./Respostas');

GrupoPergunta.belongsTo(Usuario, {
  foreignKey: "id_usuario"
});

Pergunta.belongsTo(Usuario, {
  foreignKey: "id_usuario"
});

Pergunta.belongsTo(GrupoPergunta, {
  foreignKey: "id_grupo_pergunta"
});

Respostas.belongsTo(Usuario, {
  foreignKey: "id_usuario"
});

Respostas.belongsTo(Pergunta, {
  foreignKey: "id_pergunta"
});

module.exports = {
  Usuario,
  GrupoPergunta,
  Pergunta,
  Respostas
}