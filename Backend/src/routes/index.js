const express = require('express');

const UsuarioController = new (require('../controllers/usuarioController'));
const createUsuarioValidation = require('../validation/Usuario/createUsuarioValidation');

const routes = express.Router();

//Usuario
routes.post('/usuario', createUsuarioValidation, UsuarioController.cadastrarUsuario);

module.exports = routes;