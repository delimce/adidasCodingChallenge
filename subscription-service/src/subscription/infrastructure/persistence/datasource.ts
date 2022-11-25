import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { SubscriptionEntity } from "./subscription-entity";

const entities = [
    SubscriptionEntity
];

dotenv.config();

export const appDataSource: DataSource = new DataSource({
    type    : 'mysql',
    host    : process.env.DB_HOST,
    port    : 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: entities
});

export default appDataSource;