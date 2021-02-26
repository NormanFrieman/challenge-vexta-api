import { Request, Response } from 'express';

import { Controller, ServiceStatus } from '../../protocols';

export class ListOneCity implements Controller{
    constructor(
        private listCities: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });

        const cities: ServiceStatus = await this.listCities({ id: req.params.id });

        if(!cities.status)
            return res.status(404).json({ msg: cities.body });

        return res.status(200).json(cities);
    }
}