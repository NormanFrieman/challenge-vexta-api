import { ListOneCity } from '../../controllers/city/list-one-city';

import { Controller } from "../../protocols";

import { listCities } from '../../services/list-cities-db';

export const makeListOneCityController = (): Controller => {
    const controller = new ListOneCity(listCities);

    return controller;
}