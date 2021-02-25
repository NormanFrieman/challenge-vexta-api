import express from 'express';

import { citiesRoute } from './cities';
import { clientsRoute } from './clients';
import { usersRoute } from './users';
import { authRoute } from './auth';

import { adaptMiddleware } from '../generator/expressMiddlewareAdapter';
import { makeCheckAuthMiddleware } from '../generator/auth/makeCheckAuthMiddleware';

export const geralRoute = express.Router();

geralRoute.use(authRoute);
geralRoute.use(adaptMiddleware(makeCheckAuthMiddleware()), citiesRoute);
geralRoute.use(adaptMiddleware(makeCheckAuthMiddleware()), clientsRoute);
geralRoute.use(adaptMiddleware(makeCheckAuthMiddleware()), usersRoute);