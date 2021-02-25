import { DeleteUser } from '../../controllers/delele-user';

import { Controller } from '../../protocols';

import { compareEncrypt } from '../../services/compareEncrypt';

import { deleteUserDB } from '../../services/delete-user-db';

export const makeDeleteUserController = (): Controller => {
    const controller = new DeleteUser(compareEncrypt, deleteUserDB);

    return controller;
}