import Customer from "../customer/interface";
import Service from "../service/interface";
import Technician from "../technician/interface";

export default interface Order {
    id: number;
    message: string;
    technician: Technician;
    customer: Customer;
    service: Service;
    createdAt: Date;
    updatedAt: Date;
}
