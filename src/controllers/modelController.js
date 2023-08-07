import * as services from '../services'
import { id, model_name, brand_id } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getModels = async (req, res) => {
    try {
        const response = await services.getModels(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewModel = async (req, res) => {
    try {

        const { error } = joi.object({ model_name, brand_id }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewModel(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateModel = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateModel(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
