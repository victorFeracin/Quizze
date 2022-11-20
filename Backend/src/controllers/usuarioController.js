const { Usuario } = require("../model");
const bcrypt = require('bcryptjs');

class usuarioController {
  async cadastrarUsuario (req, res) {
    try {
      const { email, password, name, userType } = req.body
      const newPassword = bcrypt.hashSync(password, 10);
      console.log(email, newPassword, name, userType);
      const newUsuario = await Usuario.create(
        {
          email, 
          password: newPassword, 
          name, 
          userType
        }
      );
      
      return res.status(201).json(newUsuario)

    } catch (error) {
      res.status(400).json("Não foi possivel cadastrar o usuario")
      console.log(error)
    }
  }

};

module.exports = usuarioController;