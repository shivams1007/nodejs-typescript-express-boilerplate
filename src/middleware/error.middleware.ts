import { Response, Request, NextFunction } from 'express';
import moment from 'moment';

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ', error);
  return res.status(status).send({ status, message });
  return next();
};
