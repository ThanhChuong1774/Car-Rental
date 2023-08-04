'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class return_vehicle_condition_details extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            return_vehicle_condition_details.belongsTo(models.vehicle_conditions, { foreignKey: 'vehicle_condition_id', targetKey: 'id' });
        }
    }
    return_vehicle_condition_details.init({
        vehicle_condition_id: DataTypes.INTEGER,
        vehicle_condition_status: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'return_vehicle_condition_details',
    });
    return return_vehicle_condition_details;
};