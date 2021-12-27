import contactsRepository  from "../../../../repository";

export const removeContactById = async (req, res, next) => {
  const { id } = req.params;
  const resp = await contactsRepository.removeContact(id);
  console.log(resp);
  if (resp) {
    res.status(200).json({"Deleted contact":resp});
    return;
  }
  res.status(404).json({ message: "Not found" });
};
