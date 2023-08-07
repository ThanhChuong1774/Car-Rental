import db from '../models';
import { Op } from 'sequelize';

export const getSeats = ({ page, limit, order, name, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const Flimit = +limit || +process.env.LIMIT_BRANDS;
        queries.offset = offset * Flimit;
        queries.limit = Flimit;
        if (order) { query.order = [order] };
        if (name) { query.seat_amount = { [Op.substring]: name } }

        const response = await db.seats.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Can not found Seats',
            seatData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const createNewSeat = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.seats.findOrCreate({
            where: { seat_amount: body.seat_amount },
            defaults: body
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Can not create seat',
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateSeat = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        console.log(id)
        const response = await db.seats.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update seat',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})