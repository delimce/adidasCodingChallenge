import Email from "../domain/email-interface";
import HandlerInterface from "../domain/handler-interface";

import transport from "./email-client/nodemailer";

export class EmailHandler implements HandlerInterface {

    async sendEmail(email: Email): Promise<void> {
        try {
            await transport.sendMail(email);
        } catch (err) {
            console.log('Error!', err);
        }
    }

   /*  async queueEmail(email: Email): Promise<void> {
        await this.emailClient.queueEmail(email);
    } */
}