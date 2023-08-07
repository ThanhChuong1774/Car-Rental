import * as services from '../services'
import { id, fuel_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getFuels = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getFuels(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewFuel = async (req, res) => {
    try {

        const { error } = joi.object({ fuel_name }).validate(req.body);
        console.log(req.body)
        if (error) { return badRequest(error.details[0].message, res) }

        const response = await services.createNewFuel(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateFuel = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateFuel(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
