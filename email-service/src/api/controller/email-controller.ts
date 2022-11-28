import { Request, Response } from "express";

import BaseController from "./base-controller";
import container from "../container/email-container";

export class EmailController extends BaseController {

    constructor() {
        super();
    }

    async send(req: Request, res: Response): Promise<void> {
        try {
            const email = await container.get('executers.email.send').run(req.body);
            this.setData(email);
            this.setOk("email sent");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }

    async queue(req: Request, res: Response): Promise<void> {
        try {
            const email = await container.get('executers.email.queue').run(req.body);
            this.setData(email);
            this.setOk("email queued");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }
}