"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidator = void 0;
// Closure
const schemaValidator = (schema) => {
    return (req, res, next) => {
        try {
            const body = req.body;
            const response = schema.validate(body);
            if (response.error) {
                res.status(400).send({
                    msg: "All the fields in payload must be set"
                });
            }
            else {
                next();
            }
        }
        catch (error) {
            throw new Error("There is a error in the middleware");
        }
    };
};
exports.schemaValidator = schemaValidator;
