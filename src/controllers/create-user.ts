import { Request, Response } from 'express';

import { Controller } from '../protocols';

export class CreateUser implements Controller{

    constructor(
        private encrypt: Function,
        private addUserDB: Function
    ){};

    async handle(req: Request, res: Response){
        const requiredFields = ['login', 'nome', 'senha', 'admin'];

        requiredFields.forEach((field: string) => {
            if(!req.body[field])
                return res.status(400).json({ msg: `missing ${field} param` });
        });

        const { login, nome, senha, admin } = req.body;
        const response = await this.addUserDB(login, nome, senha, admin);

        return res.status(response.status).json({ msg: response.body });
    }
}