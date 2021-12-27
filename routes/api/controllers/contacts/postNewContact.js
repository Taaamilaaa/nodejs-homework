import contactsRepository  from "../../../../repository";

export const postNewContact = async (req, res, next) => {
  const newContact = await contactsRepository.addContact(req.body)
  res.status(201).json(newContact);
};
