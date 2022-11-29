import { DatabaseHandler } from "../../src/subscription/infrastructure/handler/database-handler";
import { DataSourceHandler } from "../../src/subscription/infrastructure/handler/datasource-handler";
const timeout = 10000;

// testing database
DataSourceHandler.dataSourceName = "testing";
const db = new DatabaseHandler(DataSourceHandler.getDt());

export const databaseConnect = async () => {
    jest.setTimeout(timeout);
    await db.connect();
};

export const databaseClose = async () => {
    jest.setTimeout(timeout);
    await db.close();
};

export const databaseClear = async () => {
    jest.setTimeout(timeout);
    await db.clear();
};