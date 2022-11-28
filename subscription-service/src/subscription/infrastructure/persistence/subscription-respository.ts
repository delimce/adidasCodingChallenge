import RepositoryInterface from "../../domain/repository-interface";
import { Repository, FindOneOptions } from "typeorm";
import { SubscriptionEntity } from "./subscription-entity";
import { appDataSource } from './datasource';
import SubscriptionInterface from "src/subscription/domain/subscription-interface";

export class SubscriptionRepository implements RepositoryInterface {
    constructor(
        private repository: Repository<SubscriptionEntity> = appDataSource.getRepository(SubscriptionEntity)
    ) {

    }

    async getAll(): Promise<SubscriptionInterface[] | null> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<SubscriptionInterface | null> {
        const options: FindOneOptions = {
            where: {
                id: id
            }
        };
        return await this.repository.findOne(options);
    }

    async create(subscription: SubscriptionInterface): Promise<SubscriptionInterface> {
        return await this.repository.save(subscription);
    }
    
    async cancelById(id: number): Promise<boolean> {
        const result = await this.repository.update(id, { cancelledAt: new Date() });
        return result.affected !== 0;
    }
}

export default Repository;