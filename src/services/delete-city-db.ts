import { City } from '../../models';

import { ServiceStatus } from "../protocols";

export const deleteCityDB = async (id: number): Promise<ServiceStatus> => {
    const result = await City.destroy({ where: { id: id } });

    if(!result)
        return { status: false, body: 'city not found' };

    return { status: true, body: 'sucessful to delete city' };
}