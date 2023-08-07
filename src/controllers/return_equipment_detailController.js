import * as services from '../services'
import { id, equipment_id, is_equipped } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getReturnEquipmentDetails = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getReturnEquipmentDetails(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewReturnEquipmentDetail = async (req, res) => {
    try {

        const { error } = joi.object({ equipment_id, is_equipped }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewReturnEquipmentDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateReturnEquipmentDetail = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateReturnEquipmentDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

