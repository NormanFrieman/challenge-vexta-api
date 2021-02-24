const { User } = require('../../models');

import { ServiceStatus } from "../protocols";

export const checkIsAdmin = async (id: number): Promise<ServiceStatus> => {
    const isAdmin = await User.findOne({ where: { id: id } });
    console.log(isAdmin.dataValues);
    
    if(!isAdmin)
        return { status: false, body: isAdmin.dataValues.admin };

    return { status: true, body: isAdmin.dataValues.admin };
}