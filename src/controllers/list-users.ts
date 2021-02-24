import { Request, Response } from "express";
import { Controller, ServiceStatus } from "../protocols";

export class ListUsers implements Controller{
    
    constructor(
        private listUsers: Function
    ){}

    async handle(req: Request, res: Response){
        const users: ServiceStatus = await this.listUsers();

        if(!users.status)
            return res.status(500).json();

        return res.status(200).json(users.body);
    }
}