import db from "../../db/db"
import { getCollection } from "./getCollection";
import {ObjectId} from "mongodb"

export const getContactById = async (contactId) => {
  const collection = await getCollection(db, "contacts")
  const id = ObjectId(contactId)
  const [result] = await collection.find({ _id: id }).toArray()
 
  return result
};