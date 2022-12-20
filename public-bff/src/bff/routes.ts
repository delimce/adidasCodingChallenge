import { Router, Request, Response } from "express";
import { request } from "http";
import eventEmitter from "./middleware/event-emitter";
import emailOptions from "./config/email-endpoint";


const bff_router = Router();

bff_router.get("/", (req: Request, res: Response) => {
    res.send("BFF for adidas subscriptions");
});

// send email events should be in a secure way

eventEmitter.on("send-email", (email) => {
    console.log("send an email");
    request(emailOptions, (response) => {
                console.log("email sent");
            }
        ).write(JSON.stringify(email));
});


// send email endpoint i should be able to call from the client in secure way
bff_router.get("/email", (req: Request, res: Response) => {
    const email = {
        to: "delimce@gmail.com"
    };
    eventEmitter.emit("send-email", email);
    res.send("email sent");
});


export default bff_router;

