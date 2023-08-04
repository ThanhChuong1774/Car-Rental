'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('return_receipts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            booking_id: { type: Sequelize.INTEGER },
            staff_id: { type: Sequelize.INTEGER },
            vehicle_condition_detail_id: { type: Sequelize.INTEGER },
            number_of_kilimeters: { type: Sequelize.STRING },
            return_date: { type: Sequelize.DATE },
            equipment_detail_id: { type: Sequelize.INTEGER },
            createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
            updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('return_receipts');
    }
};