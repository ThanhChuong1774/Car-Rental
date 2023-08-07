import * as services from '../services'
import { id, vehicle_condition_id, vehicle_condition } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getReturnVehicleConditionDetails = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getReturnVehicleConditionDetails(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewReturnVehicleConditionDetail = async (req, res) => {
    try {

        const { error } = joi.object({ vehicle_condition_id, vehicle_condition }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewReturnVehicleConditionDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateReturnVehicleConditionDetail = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateReturnVehicleConditionDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
