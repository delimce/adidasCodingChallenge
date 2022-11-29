import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "./middleware/cors";
import { swaggerGenerator } from "./middleware/swagger-ui";


// routes
import EmailRouter from "./routes/email-routes";

dotenv.config();

const app = express() as Application;
// v1 api routes
const v1pref: string = "v1";

// Middleware
app.use(cors);

// Endpoints
app.use(`/${v1pref}/email`, EmailRouter);

app.use(`/${v1pref}/swagger`, swaggerGenerator.swaggerServe(), swaggerGenerator.swaggerSetup());


export default app;
