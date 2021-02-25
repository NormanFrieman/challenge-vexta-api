import { Request, Response } from 'express';
import { Controller } from '../../protocols';

export class ListOneUser implements Controller{
    constructor(
        private listOneUser: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });
        
        const users = await this.listOneUser(req.params.id);
        if(!users.status)
            return res.status(404).json({ msg: users.body });

        return res.status(200).json(users.body);
    }
}