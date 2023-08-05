import * as services from '../services'
import { status_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getStatuses = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getStatuses(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewStatus = async (req, res) => {
    try {

        const { error } = joi.object({ status_name }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewStatus(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
