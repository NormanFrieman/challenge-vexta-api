import axios from 'axios';

import { ServiceStatus } from "../protocols";

export const consultCnpj = async (cnpj: string): Promise<ServiceStatus> => {
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;

    try{
        const result = await axios.get(url);

        return { status: true, body: result.data };
    }catch(err){
        return { status: false, body: { msg: err.stack } };
    }
}