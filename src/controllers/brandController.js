import * as services from '../services'
import { id, brand_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getBrands = async (req, res) => {
    try {
        const response = await services.getBrands(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewBrand = async (req, res) => {
    try {

        const { error } = joi.object({ brand_name }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewBrand(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateBrand = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateBrand(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
