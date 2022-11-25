import container from '../../../api/containers/subscription-container';
export class GetAllCase {
    constructor(
        private repository = container.get('repository.subscription')
    ) { }
    async run() {
        return await this.repository.getAll();
    }
}