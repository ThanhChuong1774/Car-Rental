import db from '../models';
import data from '../../data/data.json'

export const insertData = () => new Promise(async (resolve, reject) => {
    try {
        for (const brandData of data.brand) {
            await db.brands.create({ brand_name: brandData.brand_name });
        }
        for (const categoryData of data.categories) {
            await db.categories.create({ category_name: categoryData.category_name });
        }
        for (const classData of data.classes) {
            await db.classes.create({ class_name: classData.class_name, class_describe: classData.class_describe });
        }
        for (const colorData of data.colors) {
            await db.colors.create({ color_name: colorData.color_name });
        }
        for (const deliveryEquipmentDetailData of data.delivery_equipment_details) {
            await db.delivery_equipment_details.create({ equipment_id: deliveryEquipmentDetailData.equipment_id, is_equipped: deliveryEquipmentDetailData.is_equipped });
        }
        for (const deliveryVehicleConditionDetailData of data.delivery_vehicle_condition_details) {
            await db.delivery_vehicle_condition_details.create({ vehicle_condition_id: deliveryVehicleConditionDetailData.vehicle_condition_id, vehicle_condition: deliveryVehicleConditionDetailData.vehicle_condition });
        }
        for (const equipmentData of data.equipments) {
            await db.equipments.create({ equipment_name: equipmentData.equipment_name });
        }
        for (const fuelData of data.fuels) {
            await db.fuels.create({ fuel_name: fuelData.fuel_name });
        }
        for (const gearData of data.gears) {
            await db.gears.create({ gear_type: gearData.gear_type });
        }
        for (const manufacture_yearData of data.manufacture_years) {
            await db.manufacture_years.create({ manufacture_year: manufacture_yearData.manufacture_year });
        }
        for (const modelData of data.modelsses) {
            await db.modelsses.create({ model_name: modelData.model_name, brand_id: modelData.brand_id });
        }
        for (const priceData of data.prices) {
            await db.prices.create({ price: priceData.price });
        }

        for (const returnEquipmentDetailData of data.return_equipment_details) {
            await db.return_equipment_details.create({ equipment_id: returnEquipmentDetailData.equipment_id, is_equipped: returnEquipmentDetailData.is_equipped });
        }
        for (const returnVehicleConditionDetailData of data.return_vehicle_condition_details) {
            await db.return_vehicle_condition_details.create({ vehicle_condition_id: returnVehicleConditionDetailData.vehicle_condition_id, vehicle_condition: returnVehicleConditionDetailData.vehicle_condition });
        }

        for (const roleData of data.roles) {
            await db.roles.create({ code: roleData.code, value: roleData.value });
        }
        for (const seatData of data.seats) {
            await db.seats.create({ seat_amount: seatData.seat_amount });
        }
        for (const statusData of data.statuses) {
            await db.statuses.create({ status: statusData.status });
        }
        for (const userData of data.users) {
            await db.users.create({ email: userData.email, password: userData.password, full_name: userData.full_name, address: userData.address, phone: userData.phone, CCCD: userData.CCCD, role_code: userData.role_code });
        }
        for (const vehicle_conditionData of data.vehicle_conditions) {
            await db.vehicle_conditions.create({ vehicle_condition_name: vehicle_conditionData.vehicle_condition_name });
        }
        resolve('OK')
    } catch (error) {
        console.log(error)
        reject(error);
    }
})
