const { User } = require('../../models');

import { ServiceStatus } from "../protocols";

export const addUserDB = async (login: string, nome: string, senha: string, admin: string): Promise<ServiceStatus> => {
    const user = await User.create({
        login: login,
        nome: nome,
        senha: senha,
        admin: admin
    });

    if(!user)
        return { status: false, body: 'insert database error' };
    
    return { status: true, body: { status: `sucess insert`, id: user.dataValues.id } };
};