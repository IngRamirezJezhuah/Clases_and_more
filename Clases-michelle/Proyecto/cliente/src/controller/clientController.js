import Client from '../models/clientModel.js';

// Expresión regular corregida para validar correos electrónicos con diferentes dominios
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getClient = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const createClient = async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, direccion, fech_nacimiento } = req.body;

        // Validaciones
        if (!telefono || !nombre || !correo) {
            return res.status(400).json({ message: 'Nombre, teléfono y correo son obligatorios' });
        }

        if (!emailRegex.test(correo)) {
            return res.status(400).json({ message: 'El correo debe ser válido' });
        }

        if (!/^\d{8,11}$/.test(telefono)) {
            return res.status(400).json({ message: 'El teléfono debe tener entre 8 y 10 dígitos' });
        }

        // Verificar si ya existe el correo
        const existingClient = await Client.findOne({ where: { correo } });
        if (existingClient) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        
        const newClient = await Client.create({
            nombre,
            apellido,
            correo,
            telefono: telefono.toString(),
            direccion,
            fech_nacimiento,
        });
        
        const fech_Nacimiento = new Date(req.body.fech_nacimiento);
        if (isNaN(fech_Nacimiento)) {
            return res.status(400).json({ error: "Fecha inválida" });
        }


        return res.status(201).json({ message: 'Cliente creado exitosamente', data: newClient });

    } catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, telefono, direccion, fech_nacimiento } = req.body;

    try {
        if (!id) {
            return res.status(400).json({ message: 'ID del cliente requerido' });
        }

        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        if (correo && !emailRegex.test(correo)) {
            return res.status(400).json({ message: 'El correo debe ser válido' });
        }

        if (telefono && !/^\d{8,10}$/.test(telefono)) {
            return res.status(400).json({ message: 'El teléfono debe tener entre 8 y 10 dígitos' });
        }

        // Actualizar solo los valores que fueron enviados en el request
        await client.update({
            nombre: nombre || client.nombre,
            apellido: apellido || client.apellido,
            correo: correo || client.correo,
            telefono: telefono || client.telefono,
            direccion: direccion || client.direccion,
            fech_nacimiento: fech_nacimiento || client.fech_nacimiento,
        });

        return res.status(200).json({ message: 'Cliente actualizado exitosamente', data: client });

    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: 'ID del cliente requerido' });
        }

        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        await client.destroy();
        return res.status(200).json({ message: 'Cliente eliminado correctamente' });

    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

