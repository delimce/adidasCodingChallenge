
const swaggerJSdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Subscription service',
      version: '1.0.0',
    },
    servers: [{ url: '/v1' }],
  },
  apis: ['./dist/api/routes/*.ts', './dist/api/routes/*.js']
};

export const swaggerDoc = swaggerJSdoc(options);