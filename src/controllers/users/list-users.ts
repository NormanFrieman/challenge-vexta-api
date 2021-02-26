import { Request, Response } from "express";
import { Controller, PropsUser, ServiceStatus } from "../../protocols";

export class ListUsers implements Controller{
    
    constructor(
        private listUsers: Function
    ){}

    async handle(req: Request, res: Response){
        const properties: PropsUser = {};
        if(typeof req.query.login === 'string')
            properties.login = req.query.login;
        if(typeof req.query.nome === 'string')
            properties.nome = req.query.nome;
        
        const users: ServiceStatus = await this.listUsers(properties);
        
        if(!users.status)
            return res.status(404).json({ msg: users.body });
        
        return res.status(200).json(users.body);
    }
}