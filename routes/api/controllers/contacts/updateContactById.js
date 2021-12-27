import contactsRepository  from "../../../../repository";

export const updateContactById = async (req, res, next) => {
  const { id } = req.params  
  const updateContact = await contactsRepository.updateContact(id, req.body)
  if (updateContact) {
    res.status(200).json(updateContact);
    return;
  }
  res.status(404).json({"message": "Not found"});
};