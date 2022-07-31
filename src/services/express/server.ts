import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = require(path.join(__dirname, "../../../swagger.json"));

// Load Modules
import auth from "../../modules/auth/routes";
import customer from "../../modules/customer/routes";
import order from "../../modules/order/routes";
import service from "../../modules/service/routes";
import technician from "../../modules/technician/routes";

const app = express();

// Http request logger
app.use(morgan("dev"));

// Enable Cors
app.use(cors());

// Middleware
app.use(express.json());
app.use(
    "/docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerOptions))
);

// Routes
const rootPath = "/api/v1";

app.use(`${rootPath}/auth`, auth);
app.use(`${rootPath}/customer`, customer);
app.use(`${rootPath}/order`, order);
app.use(`${rootPath}/service`, service);
app.use(`${rootPath}/technician`, technician);

export default app;
