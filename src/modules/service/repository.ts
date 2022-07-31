import Service from "./entity";

export const createService = async (name: string) => {
    const service = new Service();
    service.name = name;

    await service.save();

    return service;
};

export const findByID = async (id: number) => {
    const service = await Service.findOneBy({ id });
    return service;
};
