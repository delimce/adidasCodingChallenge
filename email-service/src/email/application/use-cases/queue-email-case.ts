import Email from "../../domain/email-interface";

import container from '../../../api/container/email-container';
export class QueueEmailCase {
    constructor(
        private handler = container.get('handler.email')
    ) { }
    async run(email: Email) {
        return await this.handler.queueEmail(email);
    }
}

export default QueueEmailCase;