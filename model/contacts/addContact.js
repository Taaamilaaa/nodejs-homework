import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const addContact = async ({ name, email, phone }) => {
  const newContact = {id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "../../", "db", "contacts.json"),
    JSON.stringify(contacts, null, 4)
  );
  return newContact
};