import * as services from '../services'
import { internalServerError, badRequest } from '../middlewares/handle_error';

export const getBrands = async (req, res) => {
    try {
        console.log(req.query);
        const response = await services.getBrands(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(res);
    }
}