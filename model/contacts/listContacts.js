import db from "../../db/db"
import { getCollection } from "./getCollection";

export const listContacts = async () => {
  const collection = await getCollection(db, "contacts")
  const result = await collection.find().toArray()
  return result;
};