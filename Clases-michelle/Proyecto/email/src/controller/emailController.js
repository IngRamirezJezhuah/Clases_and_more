import transporter from "../config/emailConfig.js";
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();
export const sendEmail = async (req, res) => {
    const {to, subject, text} = req.body;
    try {
        //ruta absoluta del archivo
        const htmlPath = path.resolve('src/views/haha.html');
        // Leer el contenido del archivo HTML
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        await transporter.sendMail({
            from : process.env.EMAIL_USER,
            to,
            subject,
            text,
            html : htmlContent
        });
        return res.json({ message: 'Correo enviado con éxito' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
