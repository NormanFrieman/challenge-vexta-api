import express from 'express';

import { adaptRoute, makeCreateUserController, makeListUsersController } from '../../generator'

export const usersRoute = express.Router();

usersRoute.get('/usuarios', adaptRoute(makeListUsersController()));
usersRoute.post('/usuarios', adaptRoute(makeCreateUserController()));