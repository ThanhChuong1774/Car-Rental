'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class delivery_receipts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            delivery_receipts.belongsTo(models.bookings, { foreignKey: 'booking_id', targetKey: 'id' });
            delivery_receipts.belongsTo(models.users, { foreignKey: 'staff_id', targetKey: 'id' });
            delivery_receipts.belongsTo(models.delivery_vehicle_condition_details, { foreignKey: 'vehicle_condition_detail_id', targetKey: 'id' });
            delivery_receipts.belongsTo(models.delivery_equipment_details, { foreignKey: 'equipment_detail_id', targetKey: 'id' });
            delivery_receipts.belongsTo(models.bookings, { foreignKey: 'booking_id', targetKey: 'id' });
        }
    }
    delivery_receipts.init({
        booking_id: DataTypes.INTEGER,
        staff_id: DataTypes.INTEGER,
        vehicle_condition_detail_id: DataTypes.INTEGER,
        number_of_kilometers: DataTypes.STRING,
        delivery_date: DataTypes.DATE,
        equipment_detail_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'delivery_receipts',
    });
    return delivery_receipts;
};