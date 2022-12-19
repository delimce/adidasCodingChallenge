import * as dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "./middleware/bodyParser";
import cors from "./middleware/cors";

dotenv.config();
const app = express() as Application;

// Middleware
app.use(bodyParser);
app.use(cors);

// Endpoints

export default app;

