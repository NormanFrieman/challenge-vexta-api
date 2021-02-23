import express from 'express';

export const usersRoute = express.Router();

usersRoute.get('/usuarios', (req, res) => {
    res.send('usuarios');
});