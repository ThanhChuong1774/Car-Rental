'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class delivery_equipment_details extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            delivery_equipment_details.belongsTo(models.equipments, { foreignKey: 'equipment_id', targetKey: 'id' });
        }
    }
    delivery_equipment_details.init({
        equipment_id: DataTypes.INTEGER,
        is_equipped: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'delivery_equipment_details',
    });
    return delivery_equipment_details;
};