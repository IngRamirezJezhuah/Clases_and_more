import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const RABBITMQ_URL = process.env.RAABIT_MQTT;
const RABBIT_EXCHANGE =  "user_event";
const RABBIT_ROUTING_KEY = "user.created";

export async function userCreatedEvent(user){ //cada vez que usemos un awair pner que es async para que no pete
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();


    //Declarar el exchance
    await channel.assertExchange(RABBIT_EXCHANGE, "topic", { durable: true });

    //Publicar el evento
    const message = JSON.stringify(user);
    channel.publish(RABBIT_EXCHANGE,RABBIT_ROUTING_KEY, Buffer.from(message));

    console.log(`exchance "${RABBIT_EXCHANGE}",
        routing key "${RABBIT_ROUTING_KEY}": ${message}`);

    setTimeout(() => {
        connection.close();
    }, 500);
}