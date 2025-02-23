import app from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT_EXPRESS;

app.get("/", (req, res) => {
    res.send("Si les esto es por que si jalo");

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

