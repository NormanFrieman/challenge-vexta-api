import { UpdateUser } from '../../controllers/users/update-user';

import { Controller } from '../../protocols';

import { updateUser } from '../../services/update-user';

import { validateUUID } from '../../services/validate-uuid';

export const makeUpdateUserController = (): Controller => {
    const controller = new UpdateUser(updateUser, validateUUID);

    return controller;
}