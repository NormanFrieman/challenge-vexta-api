import { ListOneClient } from '../../controllers/clients/list-one-client';

import { Controller } from '../../protocols';

import { listClients } from '../../services/list-clients-db';

import { validateUUID } from '../../services/validate-uuid';

import { checkPermissionClient } from '../../services/check-permission-client';

export const makeListOneClientController = (): Controller => {
    const controller = new ListOneClient(listClients, validateUUID, checkPermissionClient);

    return controller;
}