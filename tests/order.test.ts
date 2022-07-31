require("dotenv").config();
import request from "supertest";

import postgres from "../src/services/postgres/data-source";
import server from "../src/services/express/server";
import { CannotConnectAlreadyConnectedError } from "typeorm";

/**EXAMPLE DATA */
const customerName = `Customer test ${Date.now()}`;
const customerEmail = `customer_${Date.now()}@test.com`;
const technicianName = `Cechnician test ${Date.now()}`;
const technicianEmail = `cechnician_${Date.now()}@test.com`;
const serviceName = `Cechnician test ${Date.now()}`;
var authToken: string;
var serviceId: number;

describe("POST api/v1/order", () => {
    //Create Customer
    before("Create a customer", async () => {
        await postgres.initialize().catch((err) => {
            if (!(err instanceof CannotConnectAlreadyConnectedError)) {
                throw err;
            }
        });

        await request(server)
            .post("/api/v1/customer")
            .send({
                name: customerName,
                email: customerEmail,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201);

        await request(server)
            .post("/api/v1/technician")
            .send({
                name: technicianName,
                email: technicianEmail,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201);

        const resService = await request(server)
            .post("/api/v1/service")
            .send({
                name: serviceName,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201);

        serviceId = resService.body.service.id;

        const restAuth = await request(server)
            .post("/api/v1/auth/customer")
            .send({
                email: customerEmail,
            })
            .expect(200);

        authToken = restAuth.body.token;
    });

    it("Create a order", async () => {
        request(server)
            .post("/api/v1/order")
            .send({
                serviceId,
                message: "I really need your services!",
            })
            .set("Accept", "application/json")
            .set("x-token", authToken)
            .expect("Content-Type", /json/)
            .expect(201)
            .end(function (err, res) {
                if (err) throw err;
            });
    });
});
