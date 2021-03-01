import { Request, Response } from "express";

import { Controller, PropsClient, ServiceStatus } from "../../protocols";

export class ListClients implements Controller{
    constructor(
        private listClients: Function
    ){}

    async handle(req: Request, res: Response){
        const properties: PropsClient = {
            idUser: `${req.headers.id}`
        };
        const attributes = ['cpfOrCnpj', 'nome', 'tel', 'district', 'uf'];

        for(const attribute of attributes){
            if(req.query[attribute])
                properties[attribute] = `${req.query[attribute]}`;
        }
        console.log(properties);
        const clients: ServiceStatus = await this.listClients(properties);
        
        if(!clients.status)
            return res.status(404).json({ msg: clients.body });
        
        return res.status(200).json(clients.body);
    }
}