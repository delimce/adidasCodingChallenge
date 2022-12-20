import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "./middleware/bodyParser";
import cors from "./middleware/cors";
import bff_router from "./routes";

dotenv.config();
const app = express() as Application;

// Middleware
app.use(bodyParser);
app.use(cors);

// Endpoints
app.use("/", bff_router);


export default app;

