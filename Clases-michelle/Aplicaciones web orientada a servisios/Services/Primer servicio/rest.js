const express = require("express");//Levantar el servicio
const bodyParser = require("body-parser");//Saber tipo de dato

const app = express();
app.use(bodyParser.json());

// Endpoint para saludar
app.post("/api/v1/saludo", (req, res) => {
    const { firstname, age, email } = req.body; // Leer el cuerpo del JSON
    if (!firstname) {
        return res.status(400).json({ error: "El campo de 'firstname' es obligatorio" });
    }
    res.json({ message: `Hola, ${firstname}, tu edad es ${age} y tu correo es ${email}` });
});

app.listen(4000, () => {
    console.log("Servicio REST ejecutándose en http://localhost:4000");
});
