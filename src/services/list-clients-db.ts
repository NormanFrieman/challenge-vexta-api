import { Client } from '../../models';

import { PropsClient, ServiceStatus } from "../protocols";

export const listClients = async (properties?: PropsClient): Promise<ServiceStatus> => {
    const clients = await Client.findAll({ where: properties });
    
    if(!clients)
        return { status: false, body: 'error checking the database' };
    if(!clients[0])
        return { status: false, body: 'no clients found' }

    return { status: true, body: clients };
};