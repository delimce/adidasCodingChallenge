import { AppDataSource } from "../../subscription/infrastructure/typeOrm/dataSources/production";
import { DatabaseHandler } from "../../subscription/infrastructure/handler/database-handler";

const db = new DatabaseHandler(AppDataSource);

const databaseConnect = () => {
    db.connect().then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);
        const msg = `Error trying to connect!`;
        throw new Error(msg);
    });
};

export default databaseConnect;