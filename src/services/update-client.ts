import { Client } from '../../models';

import { ServiceStatus, PropsClient } from '../protocols';

export const updateClient = async (id: string, properties: PropsClient): Promise<ServiceStatus> => {
    const client = await Client.update(properties, { where: { id: id } });
    
    if(!client[0])
        return { status: false, body: 'client not found' };

    return { status: true, body: 'client successfully modified' };
}