import { User } from '../../models';

import bcrypt from 'bcrypt';

import { ServiceStatus } from '../protocols';

export const compareEncrypt = async (senha: string, login: string): Promise<ServiceStatus> => {
    const user = await User.findOne({ where: { login: login } });

    if(!user)
        return { status: false, body: 'user not found' };
    
    const compare = await bcrypt.compare(senha, user.dataValues.senha);
    
    return { status: true, body: compare };
};