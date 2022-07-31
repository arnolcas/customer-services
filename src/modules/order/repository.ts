import Customer from "../customer/entity";
import Service from "../service/entity";
import Technician from "../technician/entity";
import Order from "./entity";

export const createOrder = async (
    service: Service,
    customer: Customer,
    technician: Technician,
    message: string
) => {
    const order = new Order();
    order.service = service;
    order.customer = customer;
    order.technician = technician;
    order.message = message;

    await order.save();

    return order;
};

export const rearOrdersByTechnician = async (technician: Technician) => {
    return await Order.find({
        relations: {
            service: true,
            customer: true,
            technician: true,
        },
        where: { technician: { id: technician.id } },
    });
};
