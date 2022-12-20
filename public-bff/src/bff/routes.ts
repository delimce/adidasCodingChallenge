import { Router, Request, Response } from "express";
import { request } from "http";
import eventEmitter from "./middleware/event-emitter";
import emailOptions from "./config/email-endpoint";
import { newSubscription, cancelSubscription } from "./config/subscription-endpoints";


const bff_router = Router();

bff_router.get("/", (req: Request, res: Response) => {
    res.send("BFF for adidas subscriptions");
});


/*** subscriptions public endpoints */
bff_router.post("/subscription", (req: Request, res: Response) => {
    console.log("new subscription");
    eventEmitter.emit("new-subscription", req.body);
    res.send("subscription created");
});

bff_router.put("/subscription/:id", (req: Request, res: Response) => {
    console.log("cancel subscription");
    eventEmitter.emit("cancel-subscription", req.body);
    res.send("subscription cancelled");
});


/***** EVENTS  ****/

// send email events should be in a secure way
eventEmitter.on("send-email", (email) => {
    console.log("send an email");
    request(emailOptions, (response) => {
        console.log("email sent");
    }
    ).write(JSON.stringify(email));
});



// send subscription events should be in a secure way
eventEmitter.on("new-subscription", (subscription) => {
    console.log("new subscription");
    request(newSubscription, (response) => {
        console.log("subscription sent");
        const email = {
            to: subscription.email,
            subject: "Subscription created",
            text: "Your subscription has been created",
        };
        eventEmitter.emit("send-email", email);
    }
    ).write(JSON.stringify(subscription));
});


// send cancel subscription events should be in a secure way
eventEmitter.on("cancel-subscription", (subscription) => {
    console.log("cancel subscription");
    cancelSubscription.path = cancelSubscription.path + "/" + subscription.id;
    request(cancelSubscription, (response) => {
        console.log("subscription cancelled");
        const email = {
            to: subscription.email,
            subject: "Subscription cancelled",
            text: "Your subscription has been cancelled",
        };
        eventEmitter.emit("send-email", email);
    }
    );
});

export default bff_router;

