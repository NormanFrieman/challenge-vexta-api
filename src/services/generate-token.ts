import { User } from '../../models';

import 'dotenv/config';

import jwt from 'jsonwebtoken';

import { ServiceStatus } from '../protocols';

export const generateToken = async (login: string): Promise<ServiceStatus> => {
    const user = await User.findOne({ where: { login: login } });

    if(!user)
        return { status: false, body: 'user not found' };
    
    const secret = process.env.SECRET_JWT;
    console.log(secret);
    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400,
    });

    return { status: true, body: token };
}