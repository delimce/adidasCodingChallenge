import { ContainerBuilder } from 'node-dependency-injection';
import { GetAllCase, GetByIdCase, createCase, deleteByIdCase } from '../../subscription/application';
import { SubscriptionRepository } from '../../subscription/infrastructure/persistence/subscription-respository';

const container = new ContainerBuilder();

container.register('repository.subscription', SubscriptionRepository);

container.register('executers.subscription.list', GetAllCase);
container.register('executers.subscription.getById', GetByIdCase);
container.register('executers.subscription.create', createCase);
container.register('executers.subscription.deleteById', deleteByIdCase);

export default container;