import { Controller } from '../../protocols';

import { CreateCity } from '../../controllers/city/create-city';

import { addCityDB } from '../../services/add-city-db';

export const makeCreateCityController = (): Controller => {
    const controller: Controller = new CreateCity(addCityDB);

    return controller;
};