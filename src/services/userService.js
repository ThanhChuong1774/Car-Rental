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
