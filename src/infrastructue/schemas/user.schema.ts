import Joi from "joi";

const names = Joi.string();
const lastNames = Joi.string();
const password = Joi.string();
const email = Joi.string();
const phone = Joi.string();
const address = Joi.string();
const city = Joi.string();
const state = Joi.string();
const idRol = Joi.number();

export const userSchemaCreate = Joi.object({
  names: names.required(),
  lastNames: lastNames.required(),
  password: password.required(),
  email: email.required(),
  phone: phone.required(),
  address: address.required(),
  city: city.required(),
  state: state.required(),
  idRol: idRol.required(),
});

export const userSchemaUpdate = Joi.object({
  names: names,
  lastNames: lastNames,
  password: password,
  email: email,
  phone: phone,
  address: address,
  city: city,
  state: state,
  idRol: idRol.optional(),
});

export const userSchemaLogin = Joi.object({
  email: email.required(),
  password: password.required(),
});
