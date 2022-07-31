import { Request, Response } from "express";
import OrderInterface from "./interface";
import library from "./library";

class OrderController {
    public createOrder = async (req: Request, res: Response) => {
        try {
            const { serviceId, message, currentUser } = req.body;
            const order: OrderInterface = await library.create(
                serviceId,
                currentUser.id,
                message
            );
            return res.status(201).json({ order });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    errors: [{ msg: error.message }],
                });
            }
        }
    };

    public getTechnicianOrders = async (req: Request, res: Response) => {
        try {
            const { currentUser } = req.body;
            const orders: Array<OrderInterface> = await library.readByTechnician(
                currentUser.email
            );

            res.json({ orders });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    errors: [{ msg: error.message }],
                });
            }
        }
    };
}

export default new OrderController();
