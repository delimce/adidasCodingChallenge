import appDataSource from "../../subscription/infrastructure/persistence/datasource";


const databaseConnect = () => {
    appDataSource.initialize().then(() => {
        console.log("Database connected");
    }).catch((err) => {
        throw new Error(err.message);
    });
};

export default databaseConnect;