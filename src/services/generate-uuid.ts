import { v4 as uuidv4} from 'uuid';

import { ServiceStatus } from '../protocols';

export const generateUUID = (): ServiceStatus => {
    const uuid = uuidv4();
    
    return { status: true, body: uuid };
}