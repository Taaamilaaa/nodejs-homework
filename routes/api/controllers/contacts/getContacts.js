import contactsRepository  from "../../../../repository";

 export const getContacts = async (req, res, next) => {
   const contacts = await contactsRepository.listContacts();  
    res.status(200).json(contacts);
};
