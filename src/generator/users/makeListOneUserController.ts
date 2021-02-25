import { ListOneUser } from '../../controllers/users/list-one-user';

import { Controller } from "../../protocols";

import { listOneUser } from '../../services/list-one-user-db';

export const makeListOneUserController = (): Controller => {
    const controller = new ListOneUser(listOneUser);

    return controller;
}