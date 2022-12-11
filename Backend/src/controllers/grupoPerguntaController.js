const { GrupoPergunta } = require("../model");

class GrupoPerguntaController {
  async cadastrarGrupoPergunta (req, res) {
    const token = req.auth.id;
    try {
      const { titulo, descricao } = req.body;
      const novoGrupoPergunta = await GrupoPergunta.create({ titulo, descricao, id_usuario: token });
      return res.status(201).json(novoGrupoPergunta);
    } catch (error) {
      res.status(400).json('Não foi possivel cadastrar o grupo de perguntas');
    }
  }

  async listarGrupoPergunta (req, res) {
    try{
      const listaDeGrupos = await GrupoPergunta.findAll();
      res.status(200).json(listaDeGrupos)
    } catch (error) {
      res.json("Não foi possível listar os grupos de perguntas")
      console.error(error)
    }
  }
}

module.exports = GrupoPerguntaController;