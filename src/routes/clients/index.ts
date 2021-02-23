import express from 'express';

export const clientsRoute = express.Router();

clientsRoute.get('/clientes', (req, res) => {
    res.send('clientes');
});