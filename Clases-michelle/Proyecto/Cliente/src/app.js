import clientRoles from './routes/clientRoutes.js';
import express from 'express'

const app = express();
app.use(express.json());
app.use('/api/client', clientRoles);



export default app;