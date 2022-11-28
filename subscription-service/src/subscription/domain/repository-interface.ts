
import SubscriptionInterface from "./subscription-interface";


export interface RepositoryInterface {
    getAll(): Promise<SubscriptionInterface[] | null>;
    getById(id: number): Promise<SubscriptionInterface | null>;
    create(subscription: SubscriptionInterface): Promise<SubscriptionInterface>;
    cancelById(id: number): Promise<boolean>;
}

export default RepositoryInterface;