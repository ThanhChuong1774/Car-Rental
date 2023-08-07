import db from '../models';
import { Op } from 'sequelize';

export const getStatuses = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.status_name = { [Op.substring]: name } }

        const response = await db.statuses.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found Statuses',
            statusData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewStatus = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.classes.findOrCreate({
            where: { status_name: body.status_name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create status',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateStatus = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        console.log(id)
        const response = await db.statuses.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update status',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})