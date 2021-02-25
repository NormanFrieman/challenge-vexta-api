import { NextFunction, Request, Response } from 'express';

import { Middleware } from '../protocols';

export class CheckUserAdmin implements Middleware{
    constructor(
        private checkIsAdmin: Function
    ){}

    async handle(req: Request, res: Response, next: NextFunction){
        const { id } = req.headers;
        if(!id)
            return res.status(400).json({ msg: 'missing id header' })
        
        const result = await this.checkIsAdmin(id);
        
        if(!result)
            return res.status(500).json();
        
        if(!result.status)
            return res.status(401).json({ msg: result.body });

        if(!result.body)
            return res.status(401).json({ msg: 'user unauthorized' });

        next();
    }
}