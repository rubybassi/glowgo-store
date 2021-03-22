const Joi = require('joi'); 

module.exports.registerAuthSchema = Joi.object({
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  firstname: Joi.string().trim().min(3).max(32).required(),
  surname: Joi.string().trim().min(3).max(32).required(),
  password: Joi.string().trim().min(6).max(255).required(),
});