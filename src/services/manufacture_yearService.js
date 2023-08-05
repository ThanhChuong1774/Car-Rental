import db from '../models';
import { Op } from 'sequelize';

export const getManufactureYears = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.class_name = { [Op.substring]: name } }

        const response = await db.manufacture_years.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found Manufacture Years',
            classData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewManufactureYear = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.classes.findOrCreate({
            where: { manufacture_year: body.manufacture_year },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create manufacture year',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})