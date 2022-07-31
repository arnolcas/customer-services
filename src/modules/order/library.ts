import technicianLibrary from "../technician/library";
import serviceLibrary from "../service/library";
import customerService from "../customer/library";
import { createOrder, rearOrdersByTechnician } from "./repository";
import Technician from "../technician/entity";
import Customer from "../customer/entity";
import Service from "../service/entity";

class OrderLibrary {
    public create = async (
        serviceId: number,
        userId: number,
        message: string
    ) => {
        const technician: Technician = await technicianLibrary.readRamdom();
        const service: Service = await serviceLibrary.read(serviceId);
        const customer: Customer = await customerService.read(userId);
        return await createOrder(service, customer, technician, message);
    };
    public readByTechnician = async (email: string) => {
        const technician: any = await technicianLibrary.readByEmail(email);
        const orders: any = await rearOrdersByTechnician(technician);
        return orders;
    };
}

export default new OrderLibrary();
