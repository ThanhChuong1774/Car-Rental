'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class vehicle_conditions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    vehicle_conditions.init({
        vehicle_condition_name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'vehicle_conditions',
    });
    return vehicle_conditions;
};