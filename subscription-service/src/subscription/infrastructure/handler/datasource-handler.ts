import * as dotenv from "dotenv";
import { dataSources } from "../typeOrm/values/dataSources";
import { DataSource } from "typeorm";
dotenv.config();

export class DataSourceHandler {

    public static dataSourceName: string | undefined = process.env.DB_ENV;

    public static getDt(): DataSource {
        const dataSource = dataSources.find(ds => ds.name === DataSourceHandler.dataSourceName);
        if (!dataSource) {
            throw new Error(`DataSource ${DataSourceHandler.dataSourceName} not found`);
        }
        return dataSource.dataSource;
    }
}