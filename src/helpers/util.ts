import { ParsedQs } from 'qs';
import { encode } from './jwt';
import { Token } from '../interface/auth.interface';
import { existsSync, mkdirSync } from 'fs';
import { APP_NAME } from './config';

export const pageOffset = (index: string | undefined | ParsedQs | string[] | ParsedQs[], limit: number,): number => {
    let pageIndex = 0;
    if (index) pageIndex = +index;
    if (pageIndex >= 1) pageIndex = (pageIndex - 1) * limit;
    return pageIndex;
};

export const pageLimit = (size: string | undefined | ParsedQs | string[] | ParsedQs[],): number => {
    let pageSize = 10;
    if (size) pageSize = +size;
    return pageSize;
};

export const loginToken = (payload: Token): string => {
    const date = new Date();
    const token = encode({
        user_id: payload.id,
        email_address: payload.email_address,
        password: payload.password,
        iat: Math.floor(date.getTime() / 1000),
        exp: Math.floor(date.setDate(date.getDate() + 15) / 1000)
    });
    return token;
};

export const randomString = (length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const generateOTP = (length: number): string => {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const removeProperty = (obj: any, property: string) => {
    const { [property]: { }, ...rest } = obj;
    return rest;
};

export const fileName = () => {
    const d = new Date();
    const curr_date = d.getDate();
    const curr_month = d.getMonth() + 1;
    const curr_year = d.getFullYear();
    const seconds = d.getSeconds();
    const minutes = d.getMinutes();
    const hour = d.getHours();
    const milisec = d.getMilliseconds();
    return (curr_year.toString() + curr_month.toString() + curr_date.toString() + hour.toString() + minutes.toString() + seconds.toString() + milisec.toString());
};

export const numToDec = (value: number) => {
    return parseFloat(value.toFixed(2));
};