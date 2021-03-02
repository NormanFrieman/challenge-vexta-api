import { Request, Response } from "express";

import { Controller, ServiceStatus } from "../../protocols";

export class DeleteClient implements Controller{
    constructor(
        private deleteClientDB: Function,
        private validateUUID: Function,
        private checkPermissionClient: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.params.id)
            return res.status(400).json({ msg: 'missing id param' });

        const validate = this.validateUUID(`${req.params.id}`);
        if(!validate.status)
            return res.status(400).json({ msg: 'id is not UUID format' });
        
        const permission: ServiceStatus = await this.checkPermissionClient(req.params.id, req.headers.id);
        if(!permission.status)
            return res.status(400).json({ msg: permission.body });
        
        const result: ServiceStatus = await this.deleteClientDB(req.params.id);
        if(!result.status)
            return res.status(404).json({ msg: result.body });
        
        return res.status(200).json({ msg: result.body });
    }
}