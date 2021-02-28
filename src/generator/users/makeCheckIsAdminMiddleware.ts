import { CheckUserAdmin } from '../../middlewares/check-user-admin';

import { Middleware } from "../../protocols";

import { checkIsAdmin } from '../../services/check-isAdmin';

import { validateUUID } from '../../services/validate-uuid';

export const makeCheckIsAdminMiddleware = (): Middleware => {
    const middleware = new CheckUserAdmin(checkIsAdmin, validateUUID);

    return middleware;
}