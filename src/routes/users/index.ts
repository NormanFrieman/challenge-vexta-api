import express from 'express';

import {
    adaptRoute,
    adaptMiddleware,
    makeCreateUserController,
    makeListUsersController,
    makeCheckIsAdminMiddleware
} from '../../generator'

export const usersRoute = express.Router();

usersRoute.use('/usuarios', adaptMiddleware(makeCheckIsAdminMiddleware()));

usersRoute.get('/usuarios', adaptRoute(makeListUsersController()));
usersRoute.post('/usuarios', adaptRoute(makeCreateUserController()));