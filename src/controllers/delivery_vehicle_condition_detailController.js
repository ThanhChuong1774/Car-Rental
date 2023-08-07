import * as services from '../services'
import { id, vehicle_condition_id, vehicle_condition } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getDeliveryVehicleConditionDetails = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getDeliveryVehicleConditionDetails(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewDeliveryVehicleConditionDetail = async (req, res) => {
    try {

        const { error } = joi.object({ vehicle_condition_id, vehicle_condition }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewDeliveryVehicleConditionDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateDeliveryVehicleConditionDetail = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateDeliveryVehicleConditionDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
