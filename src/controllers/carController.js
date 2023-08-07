import * as services from '../services'
import { id, brand_id, category_id, class_id, color_id, fuel_id, gear_id, manufacture_year_id, model_id, price_id, seat_id, img_link, is_available } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getCars = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getCars(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewCar = async (req, res) => {
    try {

        const { error } = joi.object({ brand_id, category_id, class_id, color_id, fuel_id, gear_id, manufacture_year_id, model_id, price_id, seat_id, img_link, is_available }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewCar(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateCar = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateCar(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
