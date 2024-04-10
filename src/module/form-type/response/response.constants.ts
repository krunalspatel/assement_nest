import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const responseName = {
    FORM_TYPE_CREATED: 'FORM_TYPE_CREATED',
    FORM_TYPE_FETCHED: 'FORM_TYPE_FETCHED',
    GET_ALL_FORM_TYPES: 'GET_ALL_FORM_TYPES',
};

export const responseInfo: Record<string, iResponseStatusMessage> = {
    FORM_TYPE_CREATED: {
        message: 'Form type created successfully',
        statusCode: HttpStatus.CREATED,
    },
    FORM_TYPE_FETCHED: {
        message: 'Form type fetched successfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_FORM_TYPE: {
        message: 'Form types fetched successfully',
        statusCode: HttpStatus.OK,
    },
};
