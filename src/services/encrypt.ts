import bcrypt from 'bcrypt';

import { ServiceStatus } from '../protocols';

export const encrypt = async (input: string): Promise<ServiceStatus> => {
    const hash: string = await bcrypt.hash(input, 10);

    if(!hash)
        return { status: 500, body: 'encrypt error' };

    return { status: 200, body: hash };
};