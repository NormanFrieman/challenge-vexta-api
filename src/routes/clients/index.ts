import express from 'express';

import {
    adaptRoute,
    makeCreateClientController,
    makeListClientsController,
    makeListOneClientController
} from '../../generator';

export const clientsRoute = express.Router();

clientsRoute.post('/clientes', adaptRoute(makeCreateClientController()));
clientsRoute.get('/clientes', adaptRoute(makeListClientsController()));
clientsRoute.get('/clientes/:id', adaptRoute(makeListOneClientController()));