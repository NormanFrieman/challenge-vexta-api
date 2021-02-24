const { User } = require('../../models');

import bcrypt from 'bcrypt';

import { ServiceStatus } from '../protocols';

export const compareEncrypt = async (senha: string, id: number): Promise<ServiceStatus> => {
    const user = await User.findOne({ where: { id: id } });

    if(!user)
        return { status: false, body: 'not found user' };
    
    const compare = await bcrypt.compare(senha, user.dataValues.senha);
    
    if(compare == null)
        return { status: false, body: 'compare encrypt error' };
    
    return { status: true, body: compare };
};