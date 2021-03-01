import express from 'express';

import {
    adaptRoute,
    makeCreateClientController,
    makeListClientsController
} from '../../generator';

export const clientsRoute = express.Router();

clientsRoute.post('/clientes', adaptRoute(makeCreateClientController()));
clientsRoute.get('/clientes', adaptRoute(makeListClientsController()));