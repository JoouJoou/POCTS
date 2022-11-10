"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
function validateSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            const messageError = error.details.map((err) => err.message);
            return messageError;
        }
        next();
    };
}
exports.validateSchema = validateSchema;
