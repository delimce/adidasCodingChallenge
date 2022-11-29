import { AppDataSource as prod } from "../dataSources/production";
import { AppDataSource as testing } from "../dataSources/testing";
import { DataSource } from "typeorm";

export type dataSourceObject = {
    name: string,
    dataSource: DataSource;
};

export const dataSources: dataSourceObject[] = [
    { name: "production", dataSource: prod },
    { name: "testing", dataSource: testing }
];