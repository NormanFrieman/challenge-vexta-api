import { ListCities } from '../../controllers/city/list-cities';

import { Controller } from "../../protocols";

import { listCities } from '../../services/list-cities-db';

export const makeListCitiesController = (): Controller => {
    const controller = new ListCities(listCities);

    return controller;
}