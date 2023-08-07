import * as services from '../services'
import { id, vehicle_condition } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getVehicleConditions = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getVehicleConditions(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewVehicleCondition = async (req, res) => {
    try {

        const { error } = joi.object({ vehicle_condition }).validate({ vehicle_condition: req.body.vehicle_condition });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewVehicleCondition(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateVehicleCondition = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateVehicleCondition(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
