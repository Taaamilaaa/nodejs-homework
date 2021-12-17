import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";
import contacts from "./contacts.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const listContacts = async () => {
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = contacts.filter(contact => contact.id === contactId)
  return contact
};

const removeContact = async (contactId) => {

  const cont = contacts.find(contact => contact.id === contactId)
  if (cont) {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(newContacts, null, 4)      
    );    
    return cont
  }
  return null
};

const addContact = async ({name, email, phone}) => {
  const newContact = { name, email, phone, id: randomUUID() };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 4)
  );
  return newContact
};

const updateContact = async (contactId, body) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const updateContact = { id: contactId, ...contacts[index], ...body };
     contacts[index] = updateContact
    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 4)
    );
    return updateContact;
  }
  return null
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
