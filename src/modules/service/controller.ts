import { Request, Response } from "express";
import ServiceInterface from "./interface";
import library from "./library";

class ServiceCOntroller {
    public createService = async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            const service: ServiceInterface = await library.create(name);
            return res.status(201).json({ service });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    errors: [{ msg: error.message }],
                });
            }
        }
    };
}

export default new ServiceCOntroller();
