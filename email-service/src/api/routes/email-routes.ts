import { Router, Request, Response } from "express";
import { EmailController } from "../controller/email-controller";
const EmailRouter = Router();

const controller = new EmailController();

EmailRouter.put("/add-to-queue", (req: Request, res: Response) => controller.queue(req, res));
EmailRouter.post("/send", (req: Request, res: Response) => controller.send(req, res));

export default EmailRouter;