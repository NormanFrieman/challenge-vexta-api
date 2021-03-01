import { ServiceStatus } from "../protocols";

import { consultCnpj } from './consult-cnpj';

export const validateCpfOrCnpj = async (cpfOrCnpj: string): Promise<ServiceStatus> => {
    const result: ServiceStatus = await consultCnpj(cpfOrCnpj);
    
    if(result.body.status === 'OK')
        return { status: true, body: 'J'};

    if(cpfOrCnpj.length !== 11)
        return { status: false, body: 'invalid input' };
    
    let total: number = 0;
    
    for(let i = 0; i < 9; i++)
        total += Number(cpfOrCnpj[i]) * (10 - i);
    total = (total * 10) % 11;
    
    if(total === 10 || total === 11){
        if(cpfOrCnpj[9] !== '0')
            return { status: false, body: 'invalid cpf 1' };
    }else if(`${total}` !== cpfOrCnpj[9])
        return { status: false, body: 'invalid cpf 2' };
    
    total = 0;
    for(let i = 0; i < 10; i++)
        total += Number(cpfOrCnpj[i]) * (11 - i);
    total = (total * 10) % 11;

    if(total === 10 || total === 11){
        if(cpfOrCnpj[10] !== '0')
            return { status: false, body: 'invalid cpf 3' };
    }else if(`${total}` !== cpfOrCnpj[10])
        return { status: false, body: 'invalid cpf 4' };
    
    return { status: true, body: 'F' }
}