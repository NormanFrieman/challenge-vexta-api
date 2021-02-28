import { Request, Response } from "express";

import { Controller, PropsUser, ServiceStatus } from "../../protocols";

export class UpdateUser implements Controller{
    constructor(
        private updateUser: Function,
        private validateUUID: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });
        
        const validate = this.validateUUID(`${req.params.id}`);
        if(!validate.status)
            return res.status(400).json({ msg: 'id is not UUID format' });
        
        if(typeof req.params.id === 'number')
            return res.status(400).json({ msg: 'wrong id format' });
        
        if(!req.body)
            return res.status(400).json({ msg: 'missing body json' });

        if(!req.body.login && !req.body.nome)
            return res.status(400).json({ msg: 'missing login or nome param' });

        const properties: PropsUser = {};
        if(req.body.login)
            properties.login = req.body.login;
        if(req.body.nome)
            properties.nome = req.body.nome;

        const user: ServiceStatus = await this.updateUser(req.params.id, properties);
        if(!user.status)
            return res.status(404).json({ msg: user.body });

        return res.status(200).json({ msg: user.body });
    }
}