import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));


export const register = ({ email, password, full_name, address, CCCD, phone, role_code }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.users.findOrCreate({
            where: { email },
            defaults: {
                email,
                password: hashPassword(password),
                full_name: full_name,
                address: address,
                phone: phone,
                CCCD: CCCD,
                role_code: role_code
            }
        })

        const token = response[1] ? jwt.sign({ id: response[0].id, email: response[0].email, role_code: response[0].role_code }, process.env.JWT_SECRET, { expiresIn: '30d' }) : null;
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Register successfully' : 'Email was used',
            'access_token': token ? `Bearer ${token}` : token
        })

    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const login = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.users.findOne({
            where: { email },
            raw: true
        })

        const isChecked = response && bcrypt.compareSync(password, response.password);
        const token = isChecked ? jwt.sign({ id: response.id, email: response.email, role_code: response.role_code }, process.env.JWT_SECRET, { expiresIn: '30d' }) : null;

        resolve({
            err: token ? 0 : 1,
            mes: token ? 'Login successfully' : response ? 'Password wrong' : 'Email has not been registered',
            'access_token': token ? `Bearer ${token}` : token
        })

    } catch (error) {
        reject(error);
    }
})