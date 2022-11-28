import container from '../../../api/containers/subscription-container';
export class cancelByIdCase {
    constructor(
        private repository = container.get('repository.subscription')
    ) { }
    async run(id: number) {
        return await this.repository.cancelById(id);
    }
}