const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { js2xml, xml2js } = require('xml-js');

const app = express();
app.use(bodyParser.json()); // Para manejar JSON
app.use(express.text({ type: 'application/xml' })); //Manejr archivos XML

const PORT = 5000;

//Ruta para recibir datos y guardarlos en un  archivo JSON 
app.post('/api/data', (req,res) =>{
    const data = req.body;

    //Guarda los datos enun archivo JSON
    fs.writeFileSync('data.json',JSON.stringify(data, null, 2),'utf-8');
    res.status(200).send({message:'Datos guardados en data.json'});
});

//Ruta pra transformar JSON a XML
app.get('/api/transform/json-to-data', (req, res) =>{
    //Lee los datos del archivo JSON
    const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    const xmlData = js2xml(jsonData, {compact:true, spaces: 2});

    //Responde con el XML
    res.header('Content-Type', 'application/xml');
    res.send(xmlData);
});

//Ruta pra transformar XML a JSON
app.post('/api/transform/xml-to-json', (req, res) => {
    // Obtén los datos XML del cuerpo de la solicitud
    const xmlData = req.body;
    
    // Convierte XML a JSON
    const jsonData = xml2js(xmlData, { compact: true, spaces: 2 });

    // Responde con el JSON
    res.header('Content-Type', 'application/json');
    res.send(jsonData);
});

//inicia el servicio
app.listen(PORT, () => {
    console.log(`Servicio json-xml ejecutándose en http://localhost:${PORT}`);
});