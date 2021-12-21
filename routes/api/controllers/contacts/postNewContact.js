import model  from "../../../../model/contacts/index.js";

export const postNewContact = async (req, res, next) => {
  const newContact = await model.addContact(req.body)
  res.status(201).json(newContact);
};
