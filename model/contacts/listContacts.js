import db from "../../db/db"

export const listContacts = async () => {
  const client = await db;
  const collection = client.db().collection("contacts")
  const result = await collection.find().toArray()
  return result;
};