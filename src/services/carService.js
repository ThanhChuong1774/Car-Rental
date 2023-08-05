import db from '../models';
import { Op } from 'sequelize';

// export const getBrands = ({ page, limit, order, name, available ...query }) => new Promise(async (resolve, reject) => {
export const getCars = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.model_id = { [Op.substring]: name } }
        // if (available) { query.available = { [Op.between]: available } } available: [min,max]

        const response = await db.cars.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found cars',
            brandData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})


export const createNewCar = (body) => new Promise(async (resolve, reject) => {
    try {
        console.log('>>> check 1', body)
        const response = await db.cars.create(body)
        console.log('>>> check 2', response)
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Created' : 'Can not create car',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})