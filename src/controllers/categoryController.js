import * as services from '../services'
import { id, category_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getCategories = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getCategories(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewCategory = async (req, res) => {
    try {

        const { error } = joi.object({ category_name }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewCategory(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateCategory(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
