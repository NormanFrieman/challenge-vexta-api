import { Controller } from '../../protocols';

import { CreateUser } from '../../controllers/users/create-user';

import { addUserDB } from '../../services/add-user-db';

import { encrypt } from '../../services/encrypt';

export const makeCreateUserController = (): Controller => {
    const controller: Controller = new CreateUser(encrypt, addUserDB);

    return controller;
};