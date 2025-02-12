import Joi from "joi";

const idReview = Joi.string();
const content = Joi.string();
const date = Joi.date();
const rating = Joi.number();
const nameUser = Joi.string();
const namePropertyCheck = Joi.string();
const status = Joi.string();
const isActive = Joi.number()

export const reviewSchemaCreate = Joi.object({
    content : Joi.required(),
    rating: Joi.required(),
    date: Joi.required(),
    nameUser : Joi.required(),
    namePropertyCheck: Joi.required(),
    status: Joi.required()
})

export const reviewSchemaUpdate = Joi.object({
    content :content,
    date: date,
    rating: rating,
    nameUser : nameUser,
    namePropertyCheck: namePropertyCheck,
    status:status
})