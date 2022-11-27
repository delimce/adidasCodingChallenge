import { swaggerDoc } from "../config/swagger-doc";
const swaggerUi = require("swagger-ui-express");

class SwaggerGenerator {

    swaggerServe() {
        return swaggerUi.serve;
    }

    swaggerSetup() {
        return swaggerUi.setup(swaggerDoc);
    }
}

export const swaggerGenerator = new SwaggerGenerator();

