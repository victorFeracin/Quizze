const {validate, Joi} = require ('express-validation')

module.exports = validate ({
    body: Joi.object({
        titulo: Joi.string().required(),
        descricao: Joi.string().required()
    })
})