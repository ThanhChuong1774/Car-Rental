'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cars extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            cars.belongsTo(models.brands, { foreignKey: 'brand_id', targetKey: 'id', as: 'brandData' });
            cars.belongsTo(models.categories, { foreignKey: 'category_id', targetKey: 'id', as: 'categoryData' });
            cars.belongsTo(models.classes, { foreignKey: 'class_id', targetKey: 'id', as: 'classData' });
            cars.belongsTo(models.colors, { foreignKey: 'color_id', targetKey: 'id', as: 'colorData' });
            cars.belongsTo(models.fuels, { foreignKey: 'fuel_id', targetKey: 'id', as: 'fuelData' });
            cars.belongsTo(models.gears, { foreignKey: 'gear_id', targetKey: 'id', as: 'gearData' });
            cars.belongsTo(models.manufacture_years, { foreignKey: 'manufacture_year_id', targetKey: 'id', as: 'manufacture_yearData' });
            cars.belongsTo(models.modelsses, { foreignKey: 'model_id', targetKey: 'id', as: 'modeData' });
            cars.belongsTo(models.prices, { foreignKey: 'price_id', targetKey: 'id', as: 'priceData' });
            cars.belongsTo(models.seats, { foreignKey: 'seat_id', targetKey: 'id', as: 'seatData' });
        }
    }
    cars.init({
        brand_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        class_id: DataTypes.INTEGER,
        color_id: DataTypes.INTEGER,
        fuel_id: DataTypes.INTEGER,
        gear_id: DataTypes.INTEGER,
        manufacture_year_id: DataTypes.INTEGER,
        model_id: DataTypes.INTEGER,
        price_id: DataTypes.INTEGER,
        seat_id: DataTypes.INTEGER,
        img_link: DataTypes.STRING,
        is_available: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'cars',
    });
    return cars;
};