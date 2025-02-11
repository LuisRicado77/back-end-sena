
import Joi from 'joi'

const status  = Joi.string();
const dateRequest = Joi.date();
const isActive = Joi.number();
const idProperty = Joi.number();
const idTenant = Joi.number();

export const applicationSchemaCreate = Joi.object({
    status: Joi.required(),
    dateRequest: Joi.required(),
    idProperty: Joi.optional(),
    idTenant: Joi.optional()
    
})

export const applicationSchemaUpdate = Joi.object({
    status: status.required()
})


