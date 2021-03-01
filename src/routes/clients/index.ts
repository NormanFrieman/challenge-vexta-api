import express from 'express';

import {
    adaptRoute,
    makeCreateClientController
} from '../../generator';

export const clientsRoute = express.Router();

clientsRoute.post('/clientes', adaptRoute(makeCreateClientController()));