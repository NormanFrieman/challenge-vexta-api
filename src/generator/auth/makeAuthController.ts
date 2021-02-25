import { AuthenticateUser } from '../../controllers/authenticate-user';

import { Controller } from "../../protocols";

import { compareEncrypt } from '../../services/compareEncrypt';

import { generateToken } from '../../services/generate-token';

export const makeAuthController = (): Controller => {
    const controller = new AuthenticateUser(compareEncrypt, generateToken);

    return controller;
}