'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class modelsses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            modelsses.belongsTo(models.brands, { foreignKey: 'brand_id', targetKey: 'id', as: 'brandData' });
        }
    }
    modelsses.init({
        model_name: DataTypes.STRING,
        brand_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'modelsses',
    });
    return modelsses;
};