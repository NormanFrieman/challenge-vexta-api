import { UpdateCity } from '../../controllers/city/update-city';

import { Controller } from '../../protocols';

import { updateCity } from '../../services/update-city';

export const makeUpdateCityController = (): Controller => {
    const controller = new UpdateCity(updateCity);

    return controller;
}