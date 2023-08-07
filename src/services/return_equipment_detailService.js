import db from '../models';
import { Op } from 'sequelize';

export const getReturnEquipmentDetails = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.return_receipts = { [Op.substring]: name } }

        const response = await db.return_equipment_details.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found return equipment details',
            returnEquipmentDetailData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewReturnEquipmentDetail = (body) => new Promise(async (resolve, reject) => {
    try {
        console.log('>>> check 1', body)
        const response = await db.return_equipment_details.create(body)
        console.log('>>> check 2', response)
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Created' : 'Can not create return equipment details',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateReturnEquipmentDetail = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        console.log(id)
        const response = await db.return_equipment_details.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update return equipment detail',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})