export const NODE_ENV = process.env.NODE_ENV || '';
export const PORT = Number(process.env.PORT ?? 9001);
export const API_URL = process.env.API_URL || '';
export const MASTER_PASSWORD = process.env.MASTER_PASSWORD || '';
export const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY || '';
export const DB_PORT = Number(process.env.DB_PORT) || 3306;
export const DATABASE = process.env.DATABASE || '';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || '';
export const APP_NAME = '';

export const EMAIL_HOST = process.env.EMAIL_HOST || '';
export const EMAIL_USER = process.env.EMAIL_USER || '';
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';
export const EMAIL_PORT = process.env.EMAIL_PORT || 465;
export const EMAIL_SECURE = process.env.EMAIL_SECURE || false;
export const EMAIL_FROM = process.env.EMAIL_FROM || '';