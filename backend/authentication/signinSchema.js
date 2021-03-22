const Joi = require('joi');

module.exports.signinAuthSchema = Joi.object({
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  password: Joi.string().trim().min(6).max(255).required(),
});