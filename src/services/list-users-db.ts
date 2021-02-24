const { User } = require('../../models');

import { ServiceStatus } from "../protocols";

export const listUsersDB = async (): Promise<ServiceStatus> => {
    const users = await User.findAll();

    if(!users)
        return { status: 500, body: 'error get users database' };
    
    return { status: 200, body: users };
};