const { User } = require('../../models');

import { ServiceStatus } from "../protocols";

export const deleteUserDB = async (id: number): Promise<ServiceStatus> => {
    const result = await User.destroy({ where: { id: id } });

    if(!result)
        return { status: false, body: 'failed to delete user' };

    return { status: true, body: 'sucessful to delete user' };
}