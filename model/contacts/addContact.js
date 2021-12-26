import db from "../../db/db"
import { getCollection } from "./getCollection";

export const addContact = async ( body ) => {
  const collection = await getCollection(db, "contacts");
  const newContact = {
    "favorite": false,
    ...body    
  }
  const result = await collection.insertOne(newContact)
  return result
};