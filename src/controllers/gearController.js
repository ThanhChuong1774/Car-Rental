import * as services from '../services'
import { id, gear_type } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getGears = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getGears(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewGear = async (req, res) => {
    try {

        const { error } = joi.object({ gear_type }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewGear(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateGear = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateGear(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
