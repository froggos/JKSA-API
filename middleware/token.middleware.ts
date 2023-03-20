import { Response, Request, RequestHandler, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const validarToken: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
    const token = request.header('token');
    try {
        if(!token || token === '' || token === undefined) {
            return response.status(200).json({
                acceso: false,
                msg: 'El token está malformado 1.',
            });    
        }

        jwt.verify(token, process.env.JWT!);
        next();
    } catch(error) {
        return response.status(200).json({
            acceso: false,
            msg: 'El token está malformado 2.',
        });
    }
}

export {
    validarToken,
}