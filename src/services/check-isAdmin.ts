import { User } from '../../models';

import { ServiceStatus } from "../protocols";

export const checkIsAdmin = async (id: string): Promise<ServiceStatus> => {
    const isAdmin = await User.findOne({ where: { id: id } });
    
    if(!isAdmin)
        return { status: false, body: 'user not found' };

    return { status: true, body: isAdmin.dataValues.admin };
}