import * as services from '../services'
import { id, booking_id, staff_id, vehicle_condition_detail_id, number_of_kilometers, return_date, equipment_detail_id } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getReturnReceipts = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getReturnReceipts(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewReturnReceipt = async (req, res) => {
    try {

        const { error } = joi.object({ booking_id, staff_id, vehicle_condition_detail_id, number_of_kilometers, return_date, equipment_detail_id }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewReturnReceipt(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateReturnReceipt = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateReturnReceipt(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
