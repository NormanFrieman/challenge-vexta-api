import { User } from '../../models';

import { ServiceStatus } from "../protocols";

export const addUserDB = async (uuid: string, login: string, nome: string, senha: string, admin: string): Promise<ServiceStatus> => {
    console.log(uuid);
    const user = await User.create({
        id: uuid,
        login: login,
        nome: nome,
        senha: senha,
        admin: admin
    });

    if(!user)
        return { status: false, body: 'insert database error' };

    return { status: true, body: { status: `sucess insert`, id: user.dataValues.id } };
};