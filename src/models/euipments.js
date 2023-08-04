'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class equipments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    equipments.init({
        equipment_name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'equipments',
    });
    return equipments;
};