import db from '../models';
import { Op } from 'sequelize';

export const getPrices = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.price = { [Op.substring]: name } }

        const response = await db.prices.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found Prices',
            priceData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewPrice = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.prices.findOrCreate({
            where: { price: body.price },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create price',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})