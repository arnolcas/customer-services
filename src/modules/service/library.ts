import { createService, findByID } from "./repository";

class ServiceLibrary {
    public create = async (name: string) => {
        return await createService(name);
    };

    public read = async (id: number) => {
        const service = await findByID(id);
        if (!service) {
            throw new Error("SERVICE_NOT_FOUND");
        }
        return service;
    };
}

export default new ServiceLibrary();
