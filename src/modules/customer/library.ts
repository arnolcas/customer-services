import { createCustomer, findById, findByEmail } from "./repository";
class CustomerLibrary {
    public create = async (name: string, email: string) => {
        return await createCustomer(name, email);
    };
    public read = async (id: number) => {
        const customer = await findById(id);
        if (!customer) {
            throw new Error("CUSTOMER_NOT_FOUND");
        }
        return customer;
    };
    public readByEmail = async (email: string) => await findByEmail(email);
}

export default new CustomerLibrary();
