'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('delivery_receipts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            booking_id: { type: Sequelize.INTEGER },
            staff_id: { type: Sequelize.INTEGER },
            vehicle_condition_detail_id: { type: Sequelize.INTEGER },
            number_of_kilometers: { type: Sequelize.STRING },
            delivery_date: { type: Sequelize.DATE },
            equipment_detail_id: { type: Sequelize.INTEGER },
            createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
            updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('delivery_receipts');
    }
};