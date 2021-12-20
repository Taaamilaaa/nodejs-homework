import Joi from "joi";

const createSchema = Joi.object({
  name: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});
const updateSchema = Joi.object({
  name: Joi.string().alphanum().min(2).max(30),
  email: Joi.string().email(),
  phone: Joi.string(),
}).or("name", "email", "phone");

export const validateCreate = async (req, res, next) => {
  try {
    const value = await createSchema.validateAsync(req.body);
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Field ${error.message.replace(/"/g, "")}` });
  }
  next();
};
export const validateUpdate = async (req, res, next) => {
  try {
    const value = await updateSchema.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({message: error.message.replace(/"/g, "")});
  }
  next();
};
