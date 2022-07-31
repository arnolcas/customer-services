import Technician from "./entity";

export const createTechnician = async (name: string, email: string) => {
    const technician = new Technician();
    technician.name = name;
    technician.email = email;

    await technician.save();

    return technician;
};

export const getRamdonTechnician = async () => {
    const technician = await Technician.query(
        "SELECT * FROM technician ORDER by RANDOM() LIMIT 1"
    );
    return technician;
};

export const findByEmail = async (email: string) => {
    const technician = await Technician.findOneBy({ email });
    return technician;
};
