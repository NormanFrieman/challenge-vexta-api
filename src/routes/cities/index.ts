import express from 'express';

export const citiesRoute = express.Router();

citiesRoute.get('/municipios', (req, res) => {
    res.send('cities');
});