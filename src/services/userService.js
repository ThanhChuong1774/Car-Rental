import db from '../models';


export const getOne = (user_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.users.findOne({
            where: { id: user_id },
            attributes: {
                exclude: ['password', 'role_code']
            },
            include: [
                { model: db.roles, as: 'roleData', attributes: ['id', 'code', 'value'] }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'User not found',
            userData: response
        })
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateUser = ({ id, ...body }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.users.update(body, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} Updated` : 'Can not update user',
        })
    } catch (error) {
        // console.log(error)
        reject(error);
    }
})