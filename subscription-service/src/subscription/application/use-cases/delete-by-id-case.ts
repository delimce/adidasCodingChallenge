import container from '../../../api/containers/subscription-container';
export class deleteByIdCase {
    constructor(
        private repository = container.get('repository.subscription')
    ) { }
    async run(id: number) {
        return await this.repository.deleteById(id);
    }
}