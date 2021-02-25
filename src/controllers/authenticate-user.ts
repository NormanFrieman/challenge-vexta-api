import { Request, Response } from "express";

import { Controller, ServiceStatus } from "../protocols";

export class AuthenticateUser implements Controller{
    constructor(
        private compareEncrypt: Function,
        private generateToken: Function
    ){}

    async handle(req: Request, res: Response){
        const { login, senha } = req.body;

        if(!login)
            return res.status(400).json({ msg: 'missing login body' });
        if(!senha)
            return res.status(400).json({ msg: 'missing password body' });
        
        const compare: ServiceStatus = await this.compareEncrypt(senha, login);
        if(!compare.status)
            return res.status(400).json({ msg: compare.body });
        if(!compare.body)
            return res.status(401).json({ msg: 'invalid password' });
        
        const token: ServiceStatus = await this.generateToken(login);
        if(!token.status)
            return res.status(400).json({ msg: token.body });

        return res.status(200).json({ token: token.body });
    }
}