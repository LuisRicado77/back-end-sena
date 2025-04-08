import Joi from "joi";

const idFavorite = Joi.string();
const image =Joi.string();
const titleProperty = Joi.string();
const price = Joi.number();
const priceRented= Joi.number();
const isActive = Joi.number()

export const favoriteSchemaCreate = Joi.object({
    image: Joi.required(),
    titleProperty: Joi.required(),
    price:Joi.optional(),
    priceRented: Joi.optional()

})

export const favoriteSchemaUpdate = Joi.object({
    image: image,
    titleProperty: titleProperty,
    price: price,
    priceRented:priceRented,
    isActive:isActive
})