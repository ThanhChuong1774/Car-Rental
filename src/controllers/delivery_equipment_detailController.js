import * as services from '../services'
import { id, equipment_id, is_equipped } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getDeliveryEquipmentDetails = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getDeliveryEquipmentDetails(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewDeliveryEquipmentDetail = async (req, res) => {
    try {

        const { error } = joi.object({ equipment_id, is_equipped }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewDeliveryEquipmentDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const updateDeliveryEquipmentDetail = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateDeliveryEquipmentDetail(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

