import { DeleteClient } from '../../controllers/clients/delete-client';

import { Controller } from '../../protocols';

import { deleteClientDB } from '../../services/delete-client-db';

import { validateUUID } from '../../services/validate-uuid';

import { checkPermissionClient } from '../../services/check-permission-client';

export const makeDeleteClientController = (): Controller => {
    const controller = new DeleteClient(deleteClientDB, validateUUID, checkPermissionClient);

    return controller;
}