import { ListOneCity } from '../../controllers/city/list-one-city';

import { Controller } from "../../protocols";

import { listCities } from '../../services/list-cities-db';

import { checkPermissionCity } from '../../services/check-permission-city';

export const makeListOneCityController = (): Controller => {
    const controller = new ListOneCity(listCities, checkPermissionCity);

    return controller;
}