import { Middleware } from "../protocols";

import { AuthUser } from '../middlewares/auth-user';

import { checkAuth } from '../services/check-auth';

export const makeCheckAuth = (): Middleware => {
    const middleware = new AuthUser(checkAuth);

    return middleware;
}