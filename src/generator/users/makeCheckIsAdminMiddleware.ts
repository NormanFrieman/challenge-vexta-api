import { CheckUserAdmin } from '../../middlewares/check-user-admin';

import { Middleware } from "../../protocols";

import { checkIsAdmin } from '../../services/check-isAdmin';

export const makeCheckIsAdminMiddleware = (): Middleware => {
    const middleware = new CheckUserAdmin(checkIsAdmin);

    return middleware;
}