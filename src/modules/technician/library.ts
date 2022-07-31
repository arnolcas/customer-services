import {
    createTechnician,
    getRamdonTechnician,
    findByEmail,
} from "./repository";

class TechnicianLibrary {
    public create = async (name: string, email: string) => {
        return await createTechnician(name, email);
    };
    public readRamdom = async () => {
        const technicians = await getRamdonTechnician();
        if (technicians.length) {
            return technicians[0];
        }
        throw new Error("TECHNICIANS_NOT_FOUND");
    };
    public readByEmail = async (email: string) => {
        const technician = await findByEmail(email);
        if (!technician) {
            throw new Error("TECHNICIANS_NOT_FOUND");
        }
        return technician;
    };
}

export default new TechnicianLibrary();
