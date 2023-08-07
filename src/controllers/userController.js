import * as services from '../services'
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getCurrent = async (req, res) => {
    try {
        const { id } = req.user;
        console.log(req.body);
        const response = await services.getOne(id);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
export const updateUser = async (req, res) => {
    try {
        const { error } = joi.object({ id }).validate({ id: req.body.id });
        if (error) { return badRequest(error.details[0].message, res) }
        const response = await services.updateUser(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}
