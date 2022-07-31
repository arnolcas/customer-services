require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import Customer from "../../modules/customer/entity";
import Order from "../../modules/order/entity";
import Service from "../../modules/service/entity";
import Technician from "../../modules/technician/entity";

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME,
    synchronize: true,
    logging: false,
    entities: [Customer, Technician, Service, Order],
    subscribers: [],
    migrations: [],
});
