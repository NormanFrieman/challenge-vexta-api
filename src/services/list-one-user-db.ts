import { User } from '../../models';

import { ServiceStatus } from "../protocols";

export const listOneUser = async (id: number): Promise<ServiceStatus> => {
    const users = await User.findOne({
        where: { 
            id: id
        },
        attributes: ['id', 'login', 'nome', 'admin', 'createdAt']
    });

    if(!users)
        return { status: false, body: 'user not found' };
    
    return { status: true, body: users };
};