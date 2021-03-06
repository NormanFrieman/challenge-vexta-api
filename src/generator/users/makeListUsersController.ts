import { Controller } from "../../protocols";

import { ListUsers } from '../../controllers/users/list-users';

import { listUsersDB } from '../../services/list-users-db';

export const makeListUsersController = (): Controller => {
    const controller = new ListUsers(listUsersDB);

    return controller;
};