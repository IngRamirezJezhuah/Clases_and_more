import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error en la sistade usuario: ', error);
        res.status(500)
            .json({ message: 'Error al obtener los usuarios' });
    }
};