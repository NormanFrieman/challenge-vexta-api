import { City } from '../../models';

import { ServiceStatus } from "../protocols";

export const addCityDB = async (uuid: string, nome: string, uf: string, idUser: string): Promise<ServiceStatus> => {
    console.log("idUser: " + idUser);
    const city = await City.create({
        id: uuid,
        nome: nome,
        uf: uf,
        idUser: idUser
    });

    if(!city)
        return { status: false, body: 'insert database error' };
    
    return { status: true, body: { status: `sucess insert`, id: city.dataValues.id } };
};