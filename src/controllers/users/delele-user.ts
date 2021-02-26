import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../../protocols';

export class DeleteUser implements Controller{
    constructor(
        private deleteUserDB: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });

        const result: ServiceStatus = await this.deleteUserDB(req.params.id);
        if(!result.status)
            return res.status(404).json({ msg: result.body });
        
        return res.status(200).json({ msg: result.body });
    }
}