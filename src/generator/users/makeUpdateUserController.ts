import { UpdateUser } from '../../controllers/update-user';

import { Controller } from '../../protocols';

import { updateUser } from '../../services/update-user';

export const makeUpdateUserController = (): Controller => {
    const controller = new UpdateUser(updateUser);

    return controller;
}