import { Router } from "express";
import controllers from "./controllers/contacts/index"
import { validateCreate, validateUpdate,validateFavoriteUpdate } from "../../midllewares/validation/contactValidation"

const router = Router();

router.get("/", controllers.getContacts);
router.get("/:id", controllers.getContactById);
router.delete("/:id",controllers.removeContactById);
router.post("/", validateCreate, controllers.postNewContact);
router.put("/:id", validateUpdate, controllers.updateContactById);
router.patch("/:id/favorite",validateFavoriteUpdate, controllers.updateContactById);

export default router;