import { Controller } from '../../protocols';

import { CreateUser } from '../../controllers/users/create-user';

import { addUserDB } from '../../services/add-user-db';

import { encrypt } from '../../services/encrypt';

import { generateUUID } from '../../services/generate-uuid';

export const makeCreateUserController = (): Controller => {
    const controller: Controller = new CreateUser(encrypt, addUserDB, generateUUID);

    return controller;
};