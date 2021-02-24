import bcrypt from 'bcrypt';

import { ServiceStatus } from '../protocols';

export const encrypt = async (input: string): Promise<ServiceStatus> => {
    const hash: string = await bcrypt.hash(input, 10);
    
    if(!hash)
        return { status: false, body: 'encrypt error' };

    return { status: true, body: hash };
};