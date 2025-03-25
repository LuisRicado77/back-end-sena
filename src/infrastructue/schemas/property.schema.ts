import Joi from "joi";


const title = Joi.string();
const typeProperty = Joi.string();
const address = Joi.string();
const city = Joi.string();
const state = Joi.string();
const country = Joi.string();
const zipCode = Joi.number();
const numberRooms = Joi.number();
const numberBathrooms = Joi.number();
const squareMeters = Joi.string();
const rentalPrice = Joi.number();
const status = Joi.string();
const description = Joi.string();
const idLessor = Joi.number();
const images = Joi.string();

const isActive = Joi.number();


export const propertySchemaCreate = Joi.object({
  title: Joi.required(),
  typeProperty: Joi.required(),
  address: Joi.required(),
  city: Joi.required(),
  state: Joi.required(),
  country: Joi.optional(),
  zipCode: Joi.optional(),
  numberRooms: Joi.required(),
  numberBathrooms: Joi.required(),
  squareMeters: Joi.optional(),
  rentalPrice: Joi.required(),
  status: Joi.optional(),
  description: Joi.optional(),
  idLessor: Joi.required(),
  images: Joi.optional(),
  isActive: Joi.optional(),
});

export const propertySchemaUpdate = Joi.object({
  title: title,
  typeProperty: typeProperty,
  address: address,
  city: city,
  state: state,
  country: country,
  zipCode: zipCode,
  numberRooms: numberRooms,
  numberBathrooms: numberBathrooms,
  squareMeters: squareMeters,
  rentalPrice: rentalPrice,
  status: status.optional(),
  description: description,
  picture1: images.optional(),
  isActive: isActive.optional(),
});
