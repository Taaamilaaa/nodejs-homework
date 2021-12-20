import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const removeContact = async (contactId) => {
  const cont = contacts.find(contact => contact.id === contactId)
  if (cont) {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(
      path.join(__dirname, "../../", "db", "contacts.json"),
      JSON.stringify(newContacts, null, 4)      
    );    
    return cont
  }
  return null
};