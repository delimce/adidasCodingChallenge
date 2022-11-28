import { ContainerBuilder } from 'node-dependency-injection';
import { SendEmailCase, QueueEmailCase } from '../../email/application';
import { EmailHandler } from '../../email/infrastructure/email-handler';

const container = new ContainerBuilder();

container.register('handler.email', EmailHandler);

container.register('executers.email.send', SendEmailCase);
container.register('executers.email.queue', QueueEmailCase);

export default container;