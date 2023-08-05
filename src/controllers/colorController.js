import * as services from '../services'
import { color_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getColors = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getColors(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewColor = async (req, res) => {
    try {

        const { error } = joi.object({ color_name }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewColor(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
