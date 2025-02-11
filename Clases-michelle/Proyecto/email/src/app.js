import bodyParser from 'body-parser';
import express from 'express';
import emailRoutes from './routes/emailRoute.js';


const app = express();

app.use(bodyParser.json());
app.use('/api/email', emailRoutes);


export default app;