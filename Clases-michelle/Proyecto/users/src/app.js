import bodyParser from 'body-parser';
import express from 'express';
import usersRotes from './routes/usersRoute.js';
import swaggerSpec from './api-docs.js';
import swaggerUI from "swagger-ui-express";


//const { conectarRabbit } = require('./rabbitmq');


const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRotes);
app.use('/api-docs', swaggerUI.serve,
    swaggerUI.setup(swaggerSpec));





//conectarRabbitMQ();

export default app;