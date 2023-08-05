import db from '../models';
import { Op } from 'sequelize';

export const getCategories = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.category_name = { [Op.substring]: name } }

        const response = await db.categories.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found categories',
            categoryData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})


export const createNewCategory = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.categories.findOrCreate({
            where: { category_name: body.category_name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create category',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})