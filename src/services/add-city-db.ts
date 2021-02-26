import { City } from '../../models';

import { ServiceStatus } from "../protocols";

export const addCityDB = async (nome: string, uf: string): Promise<ServiceStatus> => {
    const city = await City.create({
        nome: nome,
        uf: uf
    });

    if(!city)
        return { status: false, body: 'insert database error' };
    
    return { status: true, body: { status: `sucess insert`, id: city.dataValues.id } };
};