import { Router } from "express";
import model from "../../model/index";
import {validateCreate, validateUpdate} from "./validation"
const router = Router();

router.get("/", async (req, res, next) => {
  const contacts = await model.listContacts();
  res.status(200).json(contacts);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const contact = await model.getContactById(id);
  if (contact) {
    res.status(200).json(contact);
    return;
  }
  res.status(404).json({ message: "Not found" });
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;  
  const resp = await model.removeContact(id);
  if (resp) {
    res.status(200).json({ message: "contact deleted" });
    return;
  }
  res.status(404).json({ message: "Not found" });
});

router.post("/", validateCreate, async (req, res, next) => {
  const newContact = await model.addContact(req.body)
  res.status(201).json(newContact);
});

router.put("/:id",validateUpdate, async (req, res, next) => {
  const { id } = req.params
  
  const updateContact = await model.updateContact(id, req.body)
  if (updateContact) {
    res.status(200).json(updateContact);
    return;
  }
  res.status(404).json({"message": "Not found"});
});

export default router;
