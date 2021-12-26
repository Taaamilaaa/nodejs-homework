import db from "../../db/db";
import { getCollection } from "./getCollection";
import { ObjectId } from "mongodb";

export const updateContact = async (contactId, body) => {
  const collection = await getCollection(db, "contacts");
  const id = ObjectId(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: id },
    { $set: body },
    { returnDocument: "after" }
  );
  return result;
};
