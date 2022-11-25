import SubscriptionInterface from 'src/subscription/domain/subscription-interface';
import container from '../../../api/containers/subscription-container';
export class createCase {
    constructor(
        private repository = container.get('repository.subscription')
    ) { }
    async run(subscription: SubscriptionInterface) {
        return await this.repository.create(subscription);
    }
}