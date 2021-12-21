import model from "../../../../model/contacts/index.js";

export const updateContactById = async (req, res, next) => {
  const { id } = req.params  
  const updateContact = await model.updateContact(id, req.body)
  if (updateContact) {
    res.status(200).json(updateContact);
    return;
  }
  res.status(404).json({"message": "Not found"});
};