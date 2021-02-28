import { UpdateCity } from '../../controllers/city/update-city';

import { Controller } from '../../protocols';

import { updateCity } from '../../services/update-city';

import { validateUUID } from '../../services/validate-uuid';

export const makeUpdateCityController = (): Controller => {
    const controller = new UpdateCity(updateCity, validateUUID);

    return controller;
}