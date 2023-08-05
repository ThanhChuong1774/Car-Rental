import * as services from '../services'
import { manufacture_year } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getManufactureYears = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getManufactureYears(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewManufactureYear = async (req, res) => {
    try {

        const { error } = joi.object({ manufacture_year }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewManufactureYear(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
