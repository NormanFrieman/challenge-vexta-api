const { User } = require('../../models');

import { ServiceStatus } from "../protocols";

export const listUsersDB = async (): Promise<ServiceStatus> => {
//    const users = await User.findAll({ attributes: ['login', 'nome', 'admin'] });
    const users = await User.findAll();

    if(!users)
        return { status: false, body: 'error get users database' };
    
    return { status: true, body: users };
};