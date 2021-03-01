import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../../protocols";

export class CreateCity implements Controller{
    constructor(
        private addCityDB: Function,
        private generateUUID: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.body.nome)
            return res.status(400).json({ msg: 'missing nome param'});
        
        if(!req.body.uf)
            return res.status(400).json({ msg: 'missing uf param' });
        
        const uuid: ServiceStatus = this.generateUUID();
        const city: ServiceStatus = await this.addCityDB(uuid.body, req.body.nome, req.body.uf.toUpperCase(), `${req.headers.id}`);
        if(!city.status)
            return res.status(401).json({ msg: city.body });
        
        return res.status(200).json({ msg: city.body });
    }
}