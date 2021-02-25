import express from 'express';

import { citiesRoute } from './cities';
import { clientsRoute } from './clients';
import { usersRoute } from './users';
import { authRoute } from './auth';

import { adaptMiddleware } from '../generator/expressMiddlewareAdapter';
import { makeCheckAuth } from '../generator/makeCheckAuth';

export const geralRoute = express.Router();

geralRoute.use(authRoute);
geralRoute.use(citiesRoute);
geralRoute.use(clientsRoute);
geralRoute.use(adaptMiddleware(makeCheckAuth()), usersRoute);