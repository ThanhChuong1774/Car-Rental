import * as services from '../services'
import { internalServerError, badRequest } from '../middlewares/handle_error';
import { email, password } from '../helpers/joi_schema'
import joi from 'joi';

export const register = async (req, res) => {
    try {
        let { email, password, full_name, address, phone, CCCD } = req.body;
        console.log(req.body);
        const { error } = joi.object({ email, password, full_name, address, phone, CCCD }).validate(req.body);
        console.log(error)
        if (error) { return badRequest(error.details[0]?.message, res) };
        const response = await services.register(req.body);
        return res.status(200).json(response);
    } catch (error) {

        return internalServerError(res);
    }
}

export const login = async (req, res) => {
    try {
        console.log(req.body);
        const { error } = joi.object({ email, password }).validate(req.body);
        if (error) { return badRequest(error.details[0]?.message, res) };
        const response = await services.login(req.body);
        return res.status(200).json(response);
    } catch (error) {

        return internalServerError(res);
    }
}