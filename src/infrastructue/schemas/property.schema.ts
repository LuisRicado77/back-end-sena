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
const picture1 = Joi.string();
const picture2 = Joi.string();
const picture3 = Joi.string();
const picture4 = Joi.string();
const picture5 = Joi.string();
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
  picture1: Joi.optional(),
  picture2: Joi.optional(),
  picture3: Joi.optional(),
  picture4: Joi.optional(),
  picture5: Joi.optional(),
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
  picture1: picture1.optional(),
  picture2: picture2.optional(),
  picture3: picture3.optional(),
  picture4: picture4.optional(),
  picture5: picture5.optional(),
  isActive: isActive.optional(),
});
