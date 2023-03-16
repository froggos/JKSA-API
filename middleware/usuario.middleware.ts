import { Response, Request, RequestHandler } from "express";

const validarCampos: RequestHandler = (request: Request, response: Response, next) => {
    const usuario = request.body;
    const password = request.body;

    if (usuario === undefined || password === '' || usuario === undefined && password === undefined) {
        response.json(
            {
                login: false,
                msg: 'Hay campos sin completar',
            }
        )
    }

    next();
}

export {
    validarCampos,
}