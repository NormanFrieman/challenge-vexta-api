import { Request, Response } from "express";

import { Controller, ServiceStatus } from "../../protocols";

export class ListOneClient implements Controller{
    constructor(
        private listClients: Function,
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

        const clients: ServiceStatus = await this.listClients({ id: req.params.id, idUser: req.headers.id });
        if(!clients.status)
            return res.status(404).json({ msg: clients.body });
        
        return res.status(200).json(clients.body);
    }
}