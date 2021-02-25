import express from 'express';

import {
    adaptRoute,
    makeAuthController,
} from '../../generator'

export const authRoute = express.Router();

authRoute.post('/authenticate', adaptRoute(makeAuthController()));