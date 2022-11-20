const { Usuario } = require("../model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/secret');

const authController = {
  async login (req, res) {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ 
      where: { 
        email: email
      } 
    });

    if (!usuario) {
      return res.status(400).json ('Usuário não Cadastrado')
    }

    if (!bcrypt.compareSync(password, usuario.password)) {
      return res.status(400).json ('Senha inválida')
    }

    const token = jwt.sign ({
      id: usuario.id,
      email: usuario.email,
      name: usuario.name
    }, secret.key)

    return res.json(token)
  }

};

module.exports = authController;