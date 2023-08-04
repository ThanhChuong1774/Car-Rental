'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bookings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            bookings.belongsTo(models.cars, { foreignKey: 'car_id', targetKey: 'id' });
            bookings.belongsTo(models.statuses, { foreignKey: 'status_id', targetKey: 'id' });
            bookings.belongsTo(models.users, { foreignKey: 'user_id', targetKey: 'id' });
        }
    }
    bookings.init({
        user_id: DataTypes.INTEGER,
        car_id: DataTypes.INTEGER,
        booking_date: DataTypes.DATE,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        status_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'bookings',
    });
    return bookings;
};