import { Response } from "express";
import { HTTP_MESSAGE } from "./constant";

const SuccessResponse = (res: Response, message: string = HTTP_MESSAGE.SUCCESS, data: any = null) => {
    const response = { status: 200, success: true, data: data, message: message }
    if (res) {
        return res.status(200).json(response);
    } else {
        return response;
    }
};

const FailedResponse = (res: Response, message: string = HTTP_MESSAGE.SUCCESS, data: any = null) => {
    const response = { status: 200, success: false, data: data, message: message }
    if (res) {
        return res.status(200).json(response);
    } else {
        return response;
    }
};

const BadRequestResponse = (res: Response, message: string = HTTP_MESSAGE.BAD_REQUEST, data: any = null) => {
    const response = { status: 400, success: false, data: data, message: message }
    if (res) {
        return res.status(400).json(response);
    } else {
        return response;
    }
};
const UnauthorizedResponse = (res: Response, message: string = HTTP_MESSAGE.UNAUTHORIZED, data: any = null) => {
    const response = { status: 401, success: false, data: data, message: message }
    if (res) {
        return res.status(401).json(response);
    } else {
        return response;
    }
};
const ConflictRequestResponse = (res: Response, message: string = HTTP_MESSAGE.CONFLICT, data: any = null) => {
    const response = { status: 409, success: false, data: data, message: message }
    if (res) {
        return res.status(409).json(response);
    } else {
        return response;
    }
};
const NotFoundResponse = (res: Response, message: string = HTTP_MESSAGE.NOT_FOUND, data: any = null) => {
    const response = { status: 404, success: false, data: data, message: message }
    if (res) {
        return res.status(404).json(response);
    } else {
        return response;
    }
};
const ForbiddenResponse = (res: Response, message: string = HTTP_MESSAGE.FORBIDDEN, data: any = null) => {
    const response = { status: 403, success: false, data: data, message: message }
    if (res) {
        return res.status(403).json(response);
    } else {
        return response;
    }
};
const InternalServerErrorResponse = (res: Response, message: string = HTTP_MESSAGE.INTERNAL_SERVER_ERROR, data: any = null) => {
    const response = { status: 500, success: false, data: data, message: message }
    if (res) {
        return res.status(500).json(response);
    } else {
        return response;
    }
};
const CannotDeleteResponse = (res: Response, message: string = HTTP_MESSAGE.CANNOT_DELETE, data: any = null) => {
    const response = { status: 422, success: false, data: data, message: message }
    if (res) {
        return res.status(422).json(response);
    } else {
        return response;
    }
};
const UnprocessableResponse = (res: Response, message: string, data: any = null) => {
    const response = { status: 422, success: false, data: data, message: message }
    if (res) {
        return res.status(422).json(response);
    } else {
        return response;
    }
};

export {
    SuccessResponse,
    BadRequestResponse,
    UnauthorizedResponse,
    ConflictRequestResponse,
    NotFoundResponse,
    ForbiddenResponse,
    InternalServerErrorResponse,
    CannotDeleteResponse,
    UnprocessableResponse,
    FailedResponse,
};
