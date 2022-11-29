export interface SubscriptionInterface {
    id?: number;
    email: string;
    name: string;
    gender: string;
    birthday: string;
    consent: boolean;
    cancelledAt: Date;
}

export default SubscriptionInterface;