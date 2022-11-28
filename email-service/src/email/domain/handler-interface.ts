import { Email } from "./email-interface";

export interface HandlerInterface {
    sendEmail: (email: Email) => Promise<void>;
  //  queueEmail: (email: Email) => Promise<void>;
}

export default HandlerInterface;