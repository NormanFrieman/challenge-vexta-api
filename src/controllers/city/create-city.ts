import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../protocols";

export class CreateCity implements Controller{
    constructor(
        private addCityDB: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.body.nome)
            return res.status(400).json({ msg: 'missing nome param'});
        
        if(!req.body.uf)
            return res.status(400).json({ msg: 'missing uf param' });
        
        const city: ServiceStatus = await this.addCityDB(req.body.nome, req.body.uf.toUpperCase());
        if(!city.status)
            return res.status(401).json({ msg: city.body });
        
        return res.status(200).json({ msg: city.body });
    }
}