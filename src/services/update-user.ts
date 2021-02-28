import { User } from '../../models';

import { ServiceStatus, PropsUser } from '../protocols';

export const updateUser = async (id: string, properties: PropsUser): Promise<ServiceStatus> => {
    const user = await User.update(properties, { where: { id: id } });
    
    if(!user[0])
        return { status: false, body: 'user not found' };

    return { status: true, body: 'user successfully modified' };
}