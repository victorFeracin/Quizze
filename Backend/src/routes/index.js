const express = require('express');
const routes = express.Router();

const UsuarioController = new (require('../controllers/usuarioController'));
const GrupoPerguntaController = new (require('../controllers/grupoPerguntaController'));
const PerguntaController = new (require('../controllers/perguntaController'));
const createUsuarioValidation = require('../validation/Usuario/createUsuarioValidation');
const createPerguntaValidation = require('../validation/Pergunta/createPerguntaValidation');

const authController = require('../controllers/authController')
const loginValidation = require('../validation/auth/authLogin')
const autenticador = require('../middlewares/autenticador')
const isAdmin = require('../middlewares/isAdmin');


//Login Usuario
routes.post('/login', loginValidation, authController.login)

//Usuario
routes.post('/usuario', createUsuarioValidation, UsuarioController.cadastrarUsuario);

//Grupo Pergunta
routes.post('/grupo', autenticador, isAdmin('a'), GrupoPerguntaController.cadastrarGrupoPergunta);
routes.get('/grupo', GrupoPerguntaController.listarGrupoPergunta)

//Pergunta
routes.post('/pergunta/:id', autenticador, isAdmin('a'), createPerguntaValidation, PerguntaController.cadastrarPergunta);
routes.get('/pergunta', PerguntaController.listarPergunta);

module.exports = routes;