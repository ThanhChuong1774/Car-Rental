import * as services from '../services'
import { equipment_name } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getEquipments = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getEquipments(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewEquipment = async (req, res) => {
    try {

        const { error } = joi.object({ equipment_name }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewEquipment(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
