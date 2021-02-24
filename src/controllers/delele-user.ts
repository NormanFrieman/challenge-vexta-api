import { timeStamp } from 'console';
import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../protocols';

export class DeleteUser implements Controller{
    constructor(
        private compareEncrypt: Function,
        private deleteUserDB: Function
    ){}

    async handle(req: Request, res: Response){
        const { id, senha } = req.body;

        if(!id)
            return res.status(400).json({ msg: 'missing id header' });
        if(!senha)
            return res.status(400).json({ msg: 'missing password header' });

        const compare: ServiceStatus = await this.compareEncrypt(senha, id);
        if(!compare.status)
            return res.status(500).json({ msg: compare.body });
        if(!compare.body)
            return res.status(401).json({ msg: 'different password' });

        const result: ServiceStatus = await this.deleteUserDB(id);
        if(!result.status)
            return res.status(404).json({ msg: result.body });
        
        return res.status(200).json({ msg: result.body });
    }
}