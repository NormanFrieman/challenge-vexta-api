import { Request, Response } from 'express';

import { Controller, PropsCity, ServiceStatus } from '../../protocols';

export class ListCities implements Controller{
    constructor(
        private listCities: Function
    ){}

    async handle(req: Request, res: Response){
        const properties: PropsCity = {};
        if(typeof req.query.nome === 'string')
            properties.nome = req.query.nome;
        if(typeof req.query.uf === 'string')
            properties.uf = req.query.uf.toUpperCase();

        const cities: ServiceStatus = await this.listCities(properties);

        if(!cities.status)
            return res.status(404).json({ msg: cities.body });

        return res.status(200).json(cities);
    }
}