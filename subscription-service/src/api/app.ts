import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "./middleware/bodyParser";
import cors from  "./middleware/cors";
import databaseConnect from "./middleware/database-connection";

// routes
import subscriptionRouter from "./routes/subscription-routes";

 databaseConnect();

dotenv.config();
const app = express() as Application;
// v1 api routes
const v1pref: string = "v1";

// Middleware
app.use(bodyParser);
app.use(cors);

// Endpoints
app.use(`/${v1pref}/subscriptions`, subscriptionRouter);

export default app;
