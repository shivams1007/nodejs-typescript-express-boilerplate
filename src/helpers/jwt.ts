import jwt from 'jwt-simple';
import { TOKEN_SECRET_KEY } from './config';

const encode = (data: any) => jwt.encode(data, TOKEN_SECRET_KEY);

const decode = (data: any) => jwt.decode(data, TOKEN_SECRET_KEY);

export { encode, decode };