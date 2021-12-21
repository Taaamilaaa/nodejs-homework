import model  from "../../../../model/contacts/index.js";

export const removeContactById = async (req, res, next) => {
  const { id } = req.params;
  const resp = await model.removeContact(id);
  if (resp) {
    res.status(200).json({ message: "contact deleted" });
    return;
  }
  res.status(404).json({ message: "Not found" });
};
