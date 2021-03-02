import { Client } from '../../models';

import { ServiceStatus } from "../protocols";

export const deleteClientDB = async (id: number): Promise<ServiceStatus> => {
    const result = await Client.destroy({ where: { id: id } });

    if(!result)
        return { status: false, body: 'client not found' };

    return { status: true, body: 'sucessful to delete client' };
}