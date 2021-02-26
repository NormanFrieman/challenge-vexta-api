import { ListOneUser } from '../../controllers/users/list-one-user';

import { Controller } from "../../protocols";

import { listUsersDB } from '../../services/list-users-db';

export const makeListOneUserController = (): Controller => {
    const controller = new ListOneUser(listUsersDB);

    return controller;
}