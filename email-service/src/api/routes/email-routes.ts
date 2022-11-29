import { Router, Request, Response } from "express";
import { EmailController } from "../controller/email-controller";
const EmailRouter = Router();

const controller = new EmailController();

/**
 * @openapi
 *  components:
 *   schemas:
 * 
 *    Email:
 *     type: object
 *     properties:
 *      to:
 *         type: string
 *      from:
 *         type: string
 *      subject:
 *         type: string
 *      text:
 *         type: string  
 * 
 * 
 * /email/send:
 *  post:
 *   summary: Send email to user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       ref: '#/components/schemas/Email'
 *   
 *   responses:
 *    200:
 *     description: Success
 *    500:
 *     description: Internal server error
 *    400:
 *     description: Bad request
 */
EmailRouter.post("/send", (req: Request, res: Response) => controller.send(req, res));

EmailRouter.put("/add-to-queue", (req: Request, res: Response) => controller.queue(req, res));

export default EmailRouter;