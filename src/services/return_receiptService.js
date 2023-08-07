import db from '../models';
import { Op } from 'sequelize';

// export const getBrands = ({ page, limit, order, name, available ...query }) => new Promise(async (resolve, reject) => {
export const getReturnReceipts = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.model_id = { [Op.substring]: name } }
        // if (available) { query.available = { [Op.between]: available } } available: [min,max]

        const response = await db.return_receipts.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found Return Receipts',
            returnReceiptsData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})


export const createNewReturnReceipts = (body) => new Promise(async (resolve, reject) => {
    try {
        console.log('>>> check 1', body)
        const response = await db.return_receipts.create(body)
        console.log('>>> check 2', response)
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Created' : 'Can not create Return receipt',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateReturnReceipts = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.return_receipts.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update Return Receipts',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})