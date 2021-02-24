import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../protocols';

export class CreateUser implements Controller{

    constructor(
        private encrypt: Function,
        private addUserDB: Function
    ){};

    async handle(req: Request, res: Response){
        const requiredFields = ['login', 'nome', 'senha'];

        requiredFields.forEach((field: string) => {
            if(!req.body[field])
                return res.status(400).json({ msg: `missing ${field} param` });
        });

        if(req.body.admin == undefined)
            return res.status(400).json({ msg: `missing admin param` });

        const { login, nome, senha, admin } = req.body;
        const response: ServiceStatus = await this.addUserDB(login, nome, senha, admin);

        if(!response.status)
            return res.status(500).json();

        return res.status(200).json({ msg: response.body });
    }
}