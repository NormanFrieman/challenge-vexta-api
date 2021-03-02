import express from 'express';

import {
    adaptRoute,
    makeCreateClientController,
    makeListClientsController,
    makeListOneClientController,
    makeUpdateClientController,
    makeDeleteClientController
} from '../../generator';

export const clientsRoute = express.Router();

clientsRoute.post('/clientes', adaptRoute(makeCreateClientController()));
clientsRoute.get('/clientes', adaptRoute(makeListClientsController()));
clientsRoute.get('/clientes/:id', adaptRoute(makeListOneClientController()));
clientsRoute.patch('/clientes/:id', adaptRoute(makeUpdateClientController()));
clientsRoute.delete('/clientes/:id', adaptRoute(makeDeleteClientController()));