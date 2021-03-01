import { DeleteCity } from '../../controllers/city/delete-city';

import { Controller } from '../../protocols';

import { deleteCityDB } from '../../services/delete-city-db';

import { validateUUID } from '../../services/validate-uuid';

import { checkPermissionCity } from '../../services/check-permission-city';

export const makeDeleteCityController = (): Controller => {
    const controller = new DeleteCity(deleteCityDB, validateUUID, checkPermissionCity);

    return controller;
}