import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../../protocols';

export class DeleteUser implements Controller{
    constructor(
        private compareEncrypt: Function,
        private deleteUserDB: Function
    ){}

    async handle(req: Request, res: Response){
        const { login, senha } = req.body;

        if(!login)
            return res.status(400).json({ msg: 'missing login body' });
        if(!senha)
            return res.status(400).json({ msg: 'missing password body' });

        const compare: ServiceStatus = await this.compareEncrypt(senha, login);
        if(!compare.status)
            return res.status(400).json({ msg: compare.body });
        if(!compare.body)
            return res.status(401).json({ msg: 'invalid password' });

        const result: ServiceStatus = await this.deleteUserDB(login);
        if(!result.status)
            return res.status(500).json({ msg: result.body });
        
        return res.status(200).json({ msg: result.body });
    }
}