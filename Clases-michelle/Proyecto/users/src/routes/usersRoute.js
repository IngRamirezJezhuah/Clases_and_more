import express from 'express';
import { createUsers, deleteUser, getUsers, updateUser, login } from '../controllers/userController.js';


const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: The users managing API
 *
 * /api/users/all:
 *   get:
 *     summary: Get all Users
 *     tags:
 *       - user
 *     responses:
 *       '200':
 *         description: A successful response
 */
/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Update a user
 *     description: Modify an existing user's details
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Remove a user from the database
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Add a new user to the database
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.get('/all', getUsers);
router.post('/', createUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', login); 

export default router;


