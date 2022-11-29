import { Database } from "../../domain/database-interface";
import { DataSource } from "typeorm";

export class DatabaseHandler implements Database {

    constructor(
        private appDataSource: DataSource
    ) { }

    connect(): Promise<DataSource> {
        return this.appDataSource.initialize();
    }
    
    close(): Promise<void> {
        return this.appDataSource.destroy();
    }

    // for unit tests
    clear(): Promise<void> {
        return this.appDataSource.query("DELETE FROM subscriptions");
    }
}