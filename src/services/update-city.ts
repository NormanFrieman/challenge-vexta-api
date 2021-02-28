import { City } from '../../models';

import { ServiceStatus, PropsCity } from '../protocols';

export const updateCity = async (id: number, properties: PropsCity): Promise<ServiceStatus> => {
    const city = await City.update(properties, { where: { id: id } });
    
    if(!city[0])
        return { status: false, body: 'city not found' };

    return { status: true, body: 'city successfully modified' };
}