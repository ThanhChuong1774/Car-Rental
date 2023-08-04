import db from '../models';
import { Op } from 'sequelize';

// export const getBrands = ({ page, limit, order, name, available ...query }) => new Promise(async (resolve, reject) => {
export const getBrands = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.brand_name = { [Op.substring]: name } }
        // if (available) { query.available = { [Op.between]: available } } available: [min,max]

        const response = await db.brands.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found brands',
            brandData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})
