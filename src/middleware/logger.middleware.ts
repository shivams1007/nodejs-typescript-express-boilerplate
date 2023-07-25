import { NextFunction, Request } from 'express';
import { removeProperty } from '../helpers/util';
import { logger } from '../helpers/logger';

export const loggerMiddleware = (req: Request, res: any, next: NextFunction) => {
    const log = {
        api: req.originalUrl,
        method: req.method,
        header: {
            authorization: req.headers.authorization,
            project: req.headers['x-project'],
            domain: req.headers.host
        },
        request: { body: req.body, query: req.query },
        response: null,
    };
    const oldSend = res.send;
    res.send = function (resp: string) {
        const response = resp ? removeProperty(JSON.parse(resp), 'data') : '';
        log.response = response;
        logger.info(log);
        oldSend.apply(res, arguments);
    };
    next();
};
