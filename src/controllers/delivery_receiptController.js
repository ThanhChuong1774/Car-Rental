import * as services from '../services'
import { id, booking_id, staff_id, vehicle_condition_detail_id, number_of_kilometers, delivery_date, equipment_detail_id } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getDeliveryReceipts = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getDeliveryReceipts(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewDeliveryReceipt = async (req, res) => {
    try {

        const { error } = joi.object({ booking_id, staff_id, vehicle_condition_detail_id, number_of_kilometers, delivery_date, equipment_detail_id }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewDeliveryReceipt(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateDeliveryReceipt = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateDeliveryReceipt(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
