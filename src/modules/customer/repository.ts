import Customer from "./entity";

export const createCustomer = async (name: string, email: string) => {
    const customer = new Customer();
    customer.name = name;
    customer.email = email;

    await customer.save();

    return customer;
};

export const findById = async (id: number) => {
    const customer = await Customer.findOneBy({ id });
    return customer;
};

export const findByEmail = async (email: string) => {
    const customer = await Customer.findOneBy({ email });
    return customer;
};
