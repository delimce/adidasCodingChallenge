export interface SubscriptionInterface {
    email: string;
    name: string;
    gender: string;
    birthday: string;
    consent: boolean;
    cancelledAt: Date;
}

export default SubscriptionInterface;