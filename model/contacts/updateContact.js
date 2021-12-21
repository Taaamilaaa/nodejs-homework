import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const updateContact = async (contactId, body) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const updateContact = { id: contactId, ...contacts[index], ...body };
     contacts[index] = updateContact
    await fs.writeFile(
      path.join(__dirname, "../../", "db", "contacts.json"),
      JSON.stringify(contacts, null, 4)
    );
    return updateContact;
  }
  return null
};