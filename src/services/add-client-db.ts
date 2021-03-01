import { Client } from '../../models';

import { ServiceStatus } from "../protocols";

export const addClientDB = async (properties): Promise<ServiceStatus> => {
    const client = await Client.create(properties);

    if(!client)
        return { status: false, body: 'insert database error' };
    
    return { status: true, body: { status: `sucess insert`, id: client.dataValues.id } };
};