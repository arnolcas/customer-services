require("dotenv").config();
import request from "supertest";

import postgres from "../src/services/postgres/data-source";
import server from "../src/services/express/server";
import { BeforeSoftRemove, CannotConnectAlreadyConnectedError } from "typeorm";

describe("POST api/v1/service", () => {
    before("Start db", async () => {
        await postgres.initialize().catch((err) => {
            if (!(err instanceof CannotConnectAlreadyConnectedError)) {
                throw err;
            }
        });
    });
    it("Create a customer", () => {
        request(server)
            .post("/api/v1/service")
            .send({
                name: `Service ${Date.now()}`,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end(function (err, res) {
                if (err) throw err;
            });
    });
});
