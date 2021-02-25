import { User } from '../../models';

import { ServiceStatus, PropsUser } from "../protocols";

export const listUsersDB = async (properties?: PropsUser): Promise<ServiceStatus> => {
    const users = await User.findAll({ attributes: ['id', 'login', 'nome', 'admin'], where: properties });
    
    if(!users)
        return { status: false, body: 'error checking the database' };
    if(!users[0])
        return { status: false, body: 'no users found' }

    return { status: true, body: users };
};