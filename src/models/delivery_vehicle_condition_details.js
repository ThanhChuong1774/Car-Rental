'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class delivery_vehicle_condition_details extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // delivery_vehicle_condition_details.belongsTo(models.delivery_equipment_details, { foreignKey: 'equipment_detail_id', targetKey: 'id' });
        }
    }
    delivery_vehicle_condition_details.init({
        vehicle_condition_id: DataTypes.INTEGER,
        vehicle_condition: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'delivery_vehicle_condition_details',
    });
    return delivery_vehicle_condition_details;
};