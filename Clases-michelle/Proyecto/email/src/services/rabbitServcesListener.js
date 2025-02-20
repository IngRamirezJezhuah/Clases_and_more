import amqp from 'amqplib';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';
import transporter from '../config/emailConfig.js';

dotenv.config();

const RABBITMQ_URL = process.env.RABBIT_HOST;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export async function userEvents() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();

        const exchange = 'user_event';
        const queue = 'user_created_queue';
        const routingKey = 'user.created';

        await channel.assertExchange(exchange, 'topic', { durable: true });
        await channel.assertQueue(queue, { durable: true });
        await channel.bindQueue(queue, exchange, routingKey);

        console.log(`Waiting for messages in ${queue}`);

        channel.consume(queue, async (msg) => {  // <-- async function here
            if (msg !== null) {
                try {
                    const user = JSON.parse(msg.content.toString());
                    console.log(user);

                    const htmlPath = path.resolve('src/views/bienvenida.html');
                    const htmlContent = await fs.readFile(htmlPath, 'utf8'); // <-- await here

                    const personalizedHtml = htmlContent.replace('{{username}}', user.username); // Ejemplo

                    const mailOptions = {
                        from: EMAIL_USER,
                        to: user.username, // Asegúrate de que 'user' tenga la propiedad 'email'
                        subject: 'Bienvenido!',
                        html: personalizedHtml,
                    };

                    await transporter.sendMail(mailOptions); // <-- await here
                    console.log(`Correo enviado a ${user.email}`);

                    channel.ack(msg); // <-- ack after successful email sending
                } catch (error) {
                    console.error('Error procesando mensaje o enviando correo:', error);
                    channel.nack(msg, false, false); // Nack, no requeue
                }
            }
        }, { noAck: false });

        connection.on('close', () => {
            console.error('Conexión cerrada, intentando reconectar en 5s.....');
            setTimeout(userEvents, 5000);
        });

    } catch (error) {
        console.error('Error conectando a RabbitMQ:', error.message);
        console.log('Reintentando en 5s.....');
        setTimeout(userEvents, 5000);
    }
}