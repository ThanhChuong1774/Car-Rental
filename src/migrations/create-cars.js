'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cars', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            brand_id: { type: Sequelize.INTEGER },
            category_id: { type: Sequelize.INTEGER },
            class_id: { type: Sequelize.INTEGER },
            color_id: { type: Sequelize.INTEGER },
            fuel_id: { type: Sequelize.INTEGER },
            gear_id: { type: Sequelize.INTEGER },
            manufacture_year_id: { type: Sequelize.INTEGER },
            model_id: { type: Sequelize.INTEGER },
            price_id: { type: Sequelize.INTEGER },
            seat_id: { type: Sequelize.INTEGER },
            img_link: { type: Sequelize.STRING },
            is_available: { type: Sequelize.BOOLEAN },
            createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
            updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cars');
    }
};