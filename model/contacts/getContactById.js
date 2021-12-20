import contacts from "../../db/contacts.json";

export const getContactById = async (contactId) => {
  const contact = contacts.filter(contact => contact.id === contactId)
  if (contact.length > 0) {
    return contact
  }   
};