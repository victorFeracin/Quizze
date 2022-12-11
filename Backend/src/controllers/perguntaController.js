const { Pergunta } = require('../model');

class PerguntaController {
  async cadastrarPergunta (req, res) {
    const token = req.auth.id;
    const grupoPergunta = parseInt(req.params.id);
    try {
      const { descricao } = req.body;
      const novaPergunta = await Pergunta.create({ descricao, id_usuario: token, id_grupo_pergunta: grupoPergunta });
      return res.status(201).json(novaPergunta);
    } catch (error) {
      console.log(error);
      res.status(400).json('Não foi possivel cadastrar a pergunta');
    }
  }

  async listarPergunta (req, res) {
    try{
      const listaDePerguntas = await Pergunta.findAll();
      res.status(200).json(listaDePerguntas)
    } catch (error) {
      res.json("Não foi possível listar as perguntas")
      console.error(error)
    }
  }

  async listarPorGrupo (req, res) {
    try {
      const grupoPergunta = parseInt(req.params.id);
      const listaDePerguntas = await Pergunta.findAll({ where: { id_grupo_pergunta: grupoPergunta } });
      res.status(200).json(listaDePerguntas)
    } catch (error) {
      res.json("Não foi possível listar as perguntas por grupo")
      console.error(error)
    }
  }

  async listarPerguntaId (req, res) {
    try {
      const id = parseInt(req.params.id);
      const pergunta = await Pergunta.findOne({ where: { id } });
      res.status(200).json(pergunta)
    } catch (error) {
      res.json("Não foi possível listar a pergunta")
      console.error(error)
    }
  }
}

module.exports = PerguntaController;