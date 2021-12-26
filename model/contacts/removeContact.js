import db from "../../db/db"
import { getCollection } from "./getCollection";
import { ObjectId } from "mongodb";

export const removeContact = async (contactId) => {
  const collection = await getCollection(db, "contacts");
  const id = ObjectId(contactId);
  const {value: result} = await collection.findOneAndDelete({ _id: id });

  return result;
};
