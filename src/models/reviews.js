'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            reviews.belongsTo(models.cars, { foreignKey: 'car_id', targetKey: 'id' });
            reviews.belongsTo(models.users, { foreignKey: 'user_id', targetKey: 'id' });
        }
    }
    reviews.init({
        car_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        ratting: DataTypes.INTEGER,
        comment: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'reviews',
    });
    return reviews;
};