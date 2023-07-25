import { UnprocessableResponse } from '../helpers/http';
import { NextFunction, Response, Request } from 'express';

export const bodyValidator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);
        if (result.error) {
            return UnprocessableResponse(res, result.error.details[0].message, result.error,);
        } else {
            return next();
        }
    };
};

export const queryValidator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.query);
        if (result.error) {
            return UnprocessableResponse(res, result.error.details[0].message, result.error,);
        } else {
            return next();
        }
    };
};