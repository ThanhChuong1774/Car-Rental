'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('delivery_vehicle_condition_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            vehicle_condition_id: { type: Sequelize.INTEGER },
            vehicle_condition: { type: Sequelize.INTEGER },
            createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
            updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('delivery_vehicle_condition_details');
    }
};