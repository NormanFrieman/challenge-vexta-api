import { City } from '../../models';

import { ServiceStatus } from "../protocols";

export const checkPermissionCity = async (idModel: string, idUser: string): Promise<ServiceStatus> => {
    const permission = await City.findAll({ where: { id: idModel, idUser: idUser } });

    if(!permission)
        return { status: false, body: 'error checking the database' };
    if(!permission[0])
        return { status: false, body: `${idUser} is unauthorized` }

    return { status: true };
}