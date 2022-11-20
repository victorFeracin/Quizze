const express = require('express');
const routes = express.Router();

const UsuarioController = new (require('../controllers/usuarioController'));
const createUsuarioValidation = require('../validation/Usuario/createUsuarioValidation');

const authController = require('../controllers/authController')
const loginValidation = require('../validation/auth/authLogin')
const autenticador = require('../middlewares/autenticador')


//Login Usuario
routes.post('/login', loginValidation, authController.login)

//Usuario
routes.post('/usuario', createUsuarioValidation, UsuarioController.cadastrarUsuario);

module.exports = routes;