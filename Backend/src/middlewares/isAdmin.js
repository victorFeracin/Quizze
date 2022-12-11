const { Usuario } = require('../model');

module.exports = function isAdmin(role) {
  return async function(req, res, next) {
    const usuario = await Usuario.findOne({ where: { id: req.auth.id } });
    if (!usuario || !role.includes(usuario.userType)) {
      return res.status(403).send({error: { status:403, message:'Accesso negado.'}});
    }
    next();
  }
}