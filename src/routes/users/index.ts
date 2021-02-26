import express from 'express';

import {
    adaptRoute,
    adaptMiddleware,
    makeCreateUserController,
    makeListUsersController,
    makeDeleteUserController,
    makeCheckIsAdminMiddleware,
    makeListOneUserController,
    makeUpdateUserController
} from '../../generator';

export const usersRoute = express.Router();

usersRoute.use('/usuarios', adaptMiddleware(makeCheckIsAdminMiddleware()));

usersRoute.get('/usuarios', adaptRoute(makeListUsersController()));
usersRoute.get('/usuarios/:id', adaptRoute(makeListOneUserController()));
usersRoute.post('/usuarios', adaptRoute(makeCreateUserController()));
usersRoute.delete('/usuarios/:id', adaptRoute(makeDeleteUserController()));
usersRoute.patch('/usuarios/:id', adaptRoute(makeUpdateUserController()));