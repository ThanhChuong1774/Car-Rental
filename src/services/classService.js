import db from '../models';
import { Op } from 'sequelize';

export const getClasses = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.class_name = { [Op.substring]: name } }

        const response = await db.classes.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found classes',
            classData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})


export const createNewClass = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.classes.findOrCreate({
            where: { class_name: body.class_name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create class',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})