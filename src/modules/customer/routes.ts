import { Router } from "express";
import { body } from "express-validator";
import { checkFields } from "../../services/express/middlewares";
import controller from "./controller";

const router: Router = Router();

// Routes
/**
 * @swagger
 */
router.post(
    "/",
    [body("name").not().isEmpty(), body("email").isEmail(), checkFields],
    controller.createCustomer
);

export default router;
