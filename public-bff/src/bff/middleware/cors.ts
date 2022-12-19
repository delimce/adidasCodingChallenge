import cors from 'cors';
import * as dotenv from "dotenv";

dotenv.config();

const origins: string | undefined = process.env.CORS_ORIGINS || '*';

console.log(origins);

const config = {
    origin: origins,        // <-- change this to your domain   
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const corsOptions = cors(config);

export default corsOptions;