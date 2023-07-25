import { Joi } from 'celebrate';

export const roleSchema = Joi.object({
  name: Joi.string().required(),
});
