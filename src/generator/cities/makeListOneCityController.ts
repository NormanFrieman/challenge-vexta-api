import { ListOneCity } from '../../controllers/city/list-one-city';

import { Controller } from "../../protocols";

import { listCities } from '../../services/list-cities-db';

import { validateUUID } from '../../services/validate-uuid';

import { checkPermissionCity } from '../../services/check-permission-city';

export const makeListOneCityController = (): Controller => {
    const controller = new ListOneCity(listCities, validateUUID, checkPermissionCity);

    return controller;
}