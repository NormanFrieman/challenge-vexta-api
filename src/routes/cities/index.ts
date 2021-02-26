import express from 'express';

import {
    adaptRoute,
    makeCreateCityController,
    makeListCitiesController,
    makeListOneCityController
} from '../../generator';

export const citiesRoute = express.Router();

citiesRoute.post('/municipios', adaptRoute(makeCreateCityController()));
citiesRoute.get('/municipios', adaptRoute(makeListCitiesController()));
citiesRoute.get('/municipios/:id', adaptRoute(makeListOneCityController()));