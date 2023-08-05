import * as services from '../services'
import { seat_amount } from '../helpers/joi_schema'
import joi from 'joi';
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getSeats = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getSeats(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}

export const createNewSeat = async (req, res) => {
    try {

        const { error } = joi.object({ seat_amount }).validate(req.body);
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.createNewSeat(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
