import { DeleteCity } from '../../controllers/city/delete-city';

import { Controller } from '../../protocols';

import { deleteCityDB } from '../../services/delete-city-db';

export const makeDeleteCityController = (): Controller => {
    const controller = new DeleteCity(deleteCityDB);

    return controller;
}