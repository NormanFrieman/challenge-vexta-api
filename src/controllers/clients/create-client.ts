import { Request, Response } from "express";

import { Controller } from "../../protocols";

export class CreateClient implements Controller{
    constructor(
//        private addClientDB: Function,
//        private generateUUID: Function,
//        private validateCpfOrCnpj: Function
    ){}

    handle(req: Request, res: Response){
        const attributes = ['cpfOrCnpj', 'typePerson', 'nome', 'username', 'address', 'num', 'district', 'complement', 'idAddress', 'tel', 'email', 'site', 'phone'];
        const mandatoryAttributes = ['cpfOrCnpj', 'nome', 'idAddress'];
        
        for(const mandatory of mandatoryAttributes){
            if(!req.body[mandatory])
                return res.status(400).json({ msg: `missing ${mandatory} param `});
        }
        
        const client = {};
        for(const attribute of attributes){
            if(!req.body[attribute])
                continue;
            client[attribute] = req.body[attribute];
        }

        return res.status(200).json(client);
    }
}