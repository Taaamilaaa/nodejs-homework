import model  from "../../../../model/contacts/index.js";

export const getContactById = async(req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const contact = await model.getContactById(id);
  if (contact) {
    res.status(200).json(contact);
    return;
  }
  res.status(404).json({ message: "Not found" });
};
