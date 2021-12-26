import model  from "../../../../model/contacts/index.js";

export const removeContactById = async (req, res, next) => {
  const { id } = req.params;
  const resp = await model.removeContact(id);
  console.log(resp);
  if (resp) {
    res.status(200).json({"Deleted contact":resp});
    return;
  }
  res.status(404).json({ message: "Not found" });
};
