import db from '../models';
import { Op } from 'sequelize';

export const getModels = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.model_name = { [Op.substring]: name } }

        const response = await db.modelsses.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found models',
            modelData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewModel = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.modelsses.findOrCreate({
            where: { model_name: body.model_name },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create gear',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateModel = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        console.log(id)
        const response = await db.models.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update model',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})