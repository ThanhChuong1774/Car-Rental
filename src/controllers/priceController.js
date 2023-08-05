import * as services from '../services'
import { price } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getPrices = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getPrices(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewPrice = async (req, res) => {
    try {

        const { error } = joi.object({ price }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewPrice(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
