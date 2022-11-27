import { Router, Request, Response } from "express";
import { SubscriptionController } from "../controllers/subscription-controller";
const subscriptionRouter = Router();

const controller = new SubscriptionController();

/**
 * @openapi
 *  components:
 *   schemas:
 * 
 *    Subscription:
 *     type: object
 *     properties:
 *      email:
 *           type: string
 *      name:
 *           type: string
 *      gender:
 *           type: string
 *      birthdate:
 *           type: string
 *      consent:
 *           type: boolean
 * 
 *    SubscriptionList:
 *      type: object
 *      properties:
 *       message: 
 *          type: string
 *       data: 
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Subscription'
 * 
 *    SubscriptionItem:
 *     type: object
 *     properties:
 *      message:
 *          type: string
 *      data:
 *          type: object
 *          $ref: '#/components/schemas/Subscription'  
 * 
 * /subscriptions:
 *  get:
 *   summary: Get all subscriptions
 *   parameters: []
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *         ref: '#/components/schemas/SubscriptionList'  
 *   500:
 *    description: Internal server error
 */
subscriptionRouter.get("/", (req: Request, res: Response) => controller.list(req, res));


/**
 * @openapi
 * /subscriptions/{id}:
 *  get:
 *   summary: Get subscription by id
 *   parameters:
 *      - name: id
 *        required: true
 *        in: path
 *        example: 1
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        ref: '#/components/schemas/SubscriptionItem'
 */
subscriptionRouter.get("/:id", (req: Request, res: Response) => controller.getById(req, res));

/**
 * @openapi
 * /subscriptions:
 *  post:
 *   summary: Create a new subscription
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       ref: '#/components/schemas/Subscription'
 *   responses:
 *    200:
 *     description: Success
 * 
 */
subscriptionRouter.post("/", (req: Request, res: Response) => controller.create(req, res));


/**
 * @openapi
 * /subscriptions/{id}:
 *  delete:
 *   summary: Delete a subscription by id
 *   parameters:
 *      - name: id
 *        required: true
 *        in: path
 *        example: 1
 *   responses:
 *    200:
 *     description: Success
 */
subscriptionRouter.delete("/:id", (req: Request, res: Response) => controller.deleteById(req, res));


export default subscriptionRouter;