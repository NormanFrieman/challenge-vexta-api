import { NextFunction, Request, Response } from "express";

import { Middleware, ServiceStatus } from "../protocols";

export class AuthUser implements Middleware{
    constructor(
        private checkAuth: Function
    ){}

    handle(req: Request, res: Response, next: NextFunction){        
        const auth: string = req.headers.authorization;
        if(!auth)
            return res.status(401).json({ msg: 'no token provided' });
        
        const authSplit = auth.split(' ');
        if(authSplit.length !== 2)
            return res.status(401).json({ msg: 'token error' });
        
        const [ schema, token ] = authSplit;
        if(schema !== 'Bearer')
            return res.status(401).json({ msg: 'token malformated' });
        
        const jwtResult: ServiceStatus = this.checkAuth(token);
        
        if(!jwtResult.status)
            return res.status(401).json({ msg: jwtResult.body });

        req.headers.id = jwtResult.body.id;
        
        next();
    }
}