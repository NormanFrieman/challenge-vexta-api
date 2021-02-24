import { Request, Response } from "express";
import { Controller } from "../protocols";

export class ListUsers implements Controller{
    
    constructor(
        private listUsers: Function
    ){}

    async handle(req: Request, res: Response){
        const users = await this.listUsers();

        return res.status(users.status).json(users.body);
    }
}