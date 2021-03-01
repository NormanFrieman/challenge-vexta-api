import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../../protocols';

export class ListOneCity implements Controller{
    constructor(
        private listCities: Function,
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
        
        const cities: ServiceStatus = await this.listCities({ id: req.params.id, idUser: req.headers.id });
        if(!cities.status)
            return res.status(404).json({ msg: cities.body });

        return res.status(200).json(cities);
    }
}