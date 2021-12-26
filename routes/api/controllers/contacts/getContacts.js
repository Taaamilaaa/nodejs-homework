import model  from "../../../../model/contacts/index.js";

 export const getContacts = async (req, res, next) => {
   const contacts = await model.listContacts();  
    res.status(200).json(contacts);
};
