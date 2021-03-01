import { Request, Response } from "express";

import { Controller, PropsCity, ServiceStatus } from '../../protocols';

export class UpdateCity implements Controller{
    constructor(
        private updateCity: Function,
        private validateUUID: Function,
        private checkPermissionCity: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });

        const validate = this.validateUUID(`${req.params.id}`);
        if(!validate.status)
            return res.status(400).json({ msg: 'id is not UUID format' });
        
        const permission: ServiceStatus = await this.checkPermissionCity(req.params.id, req.headers.id);
        if(!permission.status)
            return res.status(400).json({ msg: permission.body });

        if(!req.body)
            return res.status(400).json({ msg: 'missing body json' });

        if(!req.body.nome && !req.body.uf)
            return res.status(400).json({ msg: 'missing nome or uf param' });

        const properties: PropsCity = {};
        if(req.body.nome)
            properties.nome = req.body.nome;
        if(req.body.uf)
            properties.uf = req.body.uf;
        
        const city: ServiceStatus = await this.updateCity(req.params.id, properties);
        if(!city.status)
            return res.status(404).json({ msg: city.body });
        
        return res.status(200).json({ msg: city.body });
    }
}