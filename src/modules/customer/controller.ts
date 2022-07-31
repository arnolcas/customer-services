import { Request, Response } from "express";
import CustomerInterface from "./interface";
import library from "./library";

class CustomerController {
    public createCustomer = async (req: Request, res: Response) => {
        try {
            const { name, email } = req.body;
                const cusomter: CustomerInterface = await library.create(name, email);
                return res.status(201).json({ cusomter });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    errors: [{ msg: error.message }],
                });
            }
        }
    };
}

export default new CustomerController();
