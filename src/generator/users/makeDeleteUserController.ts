import { DeleteUser } from '../../controllers/users/delele-user';

import { Controller } from '../../protocols';

import { deleteUserDB } from '../../services/delete-user-db';

export const makeDeleteUserController = (): Controller => {
    const controller = new DeleteUser(deleteUserDB);

    return controller;
}