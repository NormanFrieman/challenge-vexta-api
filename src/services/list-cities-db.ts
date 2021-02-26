import { City } from '../../models';

import { PropsCity, ServiceStatus } from "../protocols";

export const listCities = async (properties?: PropsCity): Promise<ServiceStatus> => {
    const cities = await City.findAll({ where: properties });
    
    if(!cities)
        return { status: false, body: 'error checking the database' };
    if(!cities[0])
        return { status: false, body: 'no cities found' }

    return { status: true, body: cities };
};