import { User } from '../../models';

import { ServiceStatus } from "../protocols";

export const deleteUserDB = async (login: string): Promise<ServiceStatus> => {
    const result = await User.destroy({ where: { login: login } });

    if(!result)
        return { status: false, body: 'failed to delete user' };

    return { status: true, body: 'sucessful to delete user' };
}