import { Entity, Column, PrimaryColumn } from "typeorm";
import SubscriptionInterface from "../../domain/subscription-interface";

@Entity("subscriptions")
export class SubscriptionEntity implements SubscriptionInterface {

    @PrimaryColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    birthday: string;

    @Column()
    consent: boolean;

    @Column({ name: "cancelled_at" })
    cancelledAt: Date;
}


