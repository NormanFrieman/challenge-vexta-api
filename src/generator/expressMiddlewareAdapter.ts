import { NextFunction, Request, Response } from "express";

import { Middleware } from "../protocols";

export const adaptMiddleware = (middleware: Middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        return middleware.handle(req, res, next);
    }
}