const { Respostas } = require('../model');

class RespostasController {
  async cadastrarRespostas (req, res) {
    const token = req.auth.id;
    const pergunta = parseInt(req.params.id);
    try {
      const { descricao, correta } = req.body;
      const novaResposta = await Respostas.create({ descricao, correta, id_usuario: token, id_pergunta: pergunta });
      return res.status(201).json(novaResposta);
    } catch (error) {
      console.log(error);
      res.status(400).json('Não foi possivel cadastrar a resposta');
    }
  }

  async listarRespostasPergunta (req, res) {
    try{
      const pergunta = parseInt(req.params.id);
      const listaDeRespostas = await Respostas.findAll({ where: { id_pergunta: pergunta } });
      res.status(200).json(listaDeRespostas)
    } catch (error) {
      res.json("Não foi possível listar as respostas")
      console.error(error)
    }
  }

  async listarRespostasId (req, res) {
    try {
      const id = parseInt(req.params.id);
      const resposta = await Respostas.findOne({ where: { id } });
      res.status(200).json(resposta)
    } catch (error) {
      res.json("Não foi possível listar a resposta")
      console.error(error)
    }
  }
}

module.exports = RespostasController;