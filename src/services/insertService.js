import db from '../models';
import data from '../../data/data.json'

export const insertData = () => new Promise(async (resolve, reject) => {
    try {
        for (const brandData of data.brand) {
            await db.brands.create({ brand_name: brandData.brand_name });
        }
        resolve('OK')
    } catch (error) {
        console.log(error)
        reject(error);
    }
})
