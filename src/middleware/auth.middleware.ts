import { NextFunction, Response, Request } from 'express';
import { InternalServerErrorResponse, InvalidTokenResponse } from '../helpers/http';
import { decode } from '../helpers/jwt';

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.replace(/^bearer/i, '').trim();
        if (!token) return InvalidTokenResponse(res);
        const decoded_token = decode(token);

        if (!decoded_token.user_id) return InvalidTokenResponse(res);

        const check_email = true;

        if (!check_email) return InvalidTokenResponse(res);

        res.locals.user = decoded_token;
        return next();
    } catch (err: any) {
        return InternalServerErrorResponse(res, err.message);
    }
};