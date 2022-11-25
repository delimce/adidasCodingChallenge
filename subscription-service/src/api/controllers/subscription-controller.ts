import { Request, Response } from "express";

import BaseController from "./base-controller";
import container from "../containers/subscription-container";

export class SubscriptionController extends BaseController {


    constructor() {
        super();
    }

    async list(_req: Request, res: Response): Promise<void> {
        try {
            const subscriptions = await container.get('executers.subscription.list').run();
            this.setData(subscriptions);
            this.setOk("subscriptions list");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const subscription = await container.get('executers.subscription.getById').run(id);
            this.setData(subscription);
            this.setOk("subscription");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }

    async deleteById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const subscription = await container.get('executers.subscription.deleteById').run(id);
            this.setData(subscription);
            if (subscription) {
                this.setOk("subscription deleted");
            }
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const subscription = await container.get('executers.subscription.create').run(req.body);
            this.setData(subscription);
            this.setOk("subscription created");
        } catch (error: any) {
            this.setError(error.message);
        } finally {
            res.status(this.status).json(this.result);
        }
    }
}