import { Request, Response } from "express";

import { Controller, ServiceStatus } from "../../protocols";

export class DeleteCity implements Controller{
    constructor(
        private deleteCityDB
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });
        
        const result: ServiceStatus = await this.deleteCityDB(req.params.id);
        if(!result.status)
            return res.status(404).json({ msg: result.body });
        
        return res.status(200).json({ msg: result.body });
    }
}