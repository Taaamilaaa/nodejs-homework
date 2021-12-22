import model  from "../../../../model/contacts/index.js";

 export const getContacts = async (req, res, next) => {
   const contacts = await model.listContacts();  
   console.log(contacts);
  res.status(200).json(contacts);
};
