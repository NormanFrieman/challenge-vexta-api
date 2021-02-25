import express from 'express';

import {
    adaptRoute,
    adaptMiddleware,
    makeCreateUserController,
    makeListUsersController,
    makeDeleteUserController,
    makeCheckIsAdminMiddleware
} from '../../generator'

export const usersRoute = express.Router();

usersRoute.use('/usuarios', adaptMiddleware(makeCheckIsAdminMiddleware()));

usersRoute.get('/usuarios', adaptRoute(makeListUsersController()));
usersRoute.get('/usuarios/:id', (req, res) => {
    res.send(req.params.id);
});
usersRoute.post('/usuarios', adaptRoute(makeCreateUserController()));
usersRoute.delete('/usuarios', adaptRoute(makeDeleteUserController()));
usersRoute.patch('/usuarios/:id', (req, res) => {
    res.send(req.params.id);
});