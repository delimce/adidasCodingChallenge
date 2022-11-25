import { Router, Request, Response } from "express";
import { SubscriptionController } from "../controllers/subscription-controller";
const subscriptionRouter = Router();

const controller = new SubscriptionController();

subscriptionRouter.get("/", (req: Request, res: Response) => controller.list(req, res));
subscriptionRouter.get("/:id", (req: Request, res: Response) => controller.getById(req, res));
subscriptionRouter.delete("/:id", (req: Request, res: Response) => controller.deleteById(req, res));
subscriptionRouter.post("/", (req: Request, res: Response) => controller.create(req, res));


export default subscriptionRouter;