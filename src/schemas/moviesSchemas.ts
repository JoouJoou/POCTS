import Joi from "joi";

export const moviesSchema = Joi.object({
  name: Joi.string().required(),
  streaming: Joi.string().required(),
  genre: Joi.number().required(),
  status: Joi.boolean().required(),
  review: Joi.string().min(0),
});

export const updateSchema = Joi.object({
  status: Joi.boolean().required(),
  review: Joi.string().min(0),
});
