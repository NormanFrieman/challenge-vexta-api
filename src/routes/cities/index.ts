import express from 'express';

import {
    adaptRoute,
    makeCreateCityController,
    makeListCitiesController,
    makeListOneCityController,
    makeUpdateCityController,
    makeDeleteCityController
} from '../../generator';

export const citiesRoute = express.Router();

citiesRoute.post('/municipios', adaptRoute(makeCreateCityController()));
citiesRoute.get('/municipios', adaptRoute(makeListCitiesController()));
citiesRoute.get('/municipios/:id', adaptRoute(makeListOneCityController()));
citiesRoute.patch('/municipios/:id', adaptRoute(makeUpdateCityController()));
citiesRoute.delete('/municipios/:id', adaptRoute(makeDeleteCityController()));