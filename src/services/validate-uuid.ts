import { validate as uuidValidate} from 'uuid';

import { ServiceStatus } from '../protocols';

export const validateUUID = (uuid: string): ServiceStatus => {
    return { status: uuidValidate(uuid) };
}