import db from '../models';
import { Op } from 'sequelize';

export const getColors = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.color_name = { [Op.substring]: name } }

        const response = await db.colors.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found colors',
            colorData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewColor = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.colors.findOrCreate({
            where: { color_name: body.color_name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create color',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})


export const updateColor = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        console.log(id)
        const response = await db.colors.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update color',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})