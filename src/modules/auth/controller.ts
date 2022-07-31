import { Request, Response } from "express";
import library from "./library";

class AuthController {
    customerLogin = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const loginData = await library.login(library.CUSTOMER_KEY, email);
            if (loginData) res.json(loginData);
            else res.status(404).end();
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ errors: [{ msg: error.message }] });
            }
        }
    };
    technicianLogin = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const loginData = await library.login(
                library.TECHNICIAN_KEY,
                email
            );
            if (loginData) res.json(loginData);
            else res.status(404).end();
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ errors: [{ msg: error.message }] });
            }
        }
    };
}

export default new AuthController();
