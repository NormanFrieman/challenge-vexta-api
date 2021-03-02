import { UpdateClient } from '../../controllers/clients/update-client';
import { Controller } from '../../protocols';

import { validateUUID } from '../../services/validate-uuid';

import { checkPermissionClient } from '../../services/check-permission-client';

import { listCities } from '../../services/list-cities-db';

import { updateClient } from '../../services/update-client';

export const makeUpdateClientController = (): Controller => {
    const controller = new UpdateClient(validateUUID, checkPermissionClient, listCities, updateClient);

    return controller;
}