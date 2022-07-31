import { Request, Response } from "express";
import library from "./library";

class TechnicianController {
    public createTechnician = async (req: Request, res: Response) => {
        try {
            const { name, email } = req.body;
            const technician = await library.create(name, email);
            res.status(201).json({ technician });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    errors: [{ msg: error.message }],
                });
            }
        }
    };
}

export default new TechnicianController();
