import { Router } from "express";
import controllers from "./controllers/auth"
import guard from "../../midllewares/guard";

const router = Router();

router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post("/logout", guard, controllers.logout);
router.get("/current", guard, controllers.current)

export default router;