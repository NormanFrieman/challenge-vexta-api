import { CreateClient } from '../../controllers/clients/create-client';

import { Controller } from "../../protocols";

export const makeCreateClientController = (): Controller => {
    const controller = new CreateClient();

    return controller;
}