import bodyParser from "body-parser";
import express from "express";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

export default app;