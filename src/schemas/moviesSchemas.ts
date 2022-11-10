import Joi from "joi";

const moviesSchema = Joi.object({
  name: Joi.string().required(),
  streaming: Joi.string().required(),
  genre: Joi.number().required(),
  status: Joi.boolean().required(),
  review: Joi.string().min(0),
});

export default moviesSchema;
