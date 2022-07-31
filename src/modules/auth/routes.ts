import { Router } from "express";
import { body } from "express-validator";
import { checkFields } from "../../services/express/middlewares";
import controller from "./controller";

const router: Router = Router();

// Routes
router.post(
    "/customer",
    [body("email").isEmail(), checkFields],
    controller.customerLogin
);
router.post(
    "/technician",
    [body("email").isEmail(), checkFields],
    controller.technicianLogin
);

export default router;
