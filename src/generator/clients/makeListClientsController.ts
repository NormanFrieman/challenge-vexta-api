import { ListClients } from '../../controllers/clients/list-clients';

import { Controller } from "../../protocols";

import { listClients } from '../../services/list-clients-db';

export const makeListClientsController = (): Controller => {
    const controller = new ListClients(listClients);

    return controller;
}