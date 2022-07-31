import { Router } from "express";
import { body } from "express-validator";
import { checkFields } from "../../services/express/middlewares";
import controller from "./controller";
import AuthLibrary from "../auth/library";

const router: Router = Router();

// Routes
/**
 * @swagger
 */
router.post(
    "/",
    [
        AuthLibrary.validateToken,
        body("serviceId").isNumeric(),
        body("message").not().isEmpty(),
        checkFields,
    ],
    controller.createOrder
);
/**
 * @swagger
 */
router.get("/", [AuthLibrary.validateToken], controller.getTechnicianOrders);

export default router;
