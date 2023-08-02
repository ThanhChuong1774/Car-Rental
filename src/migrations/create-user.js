'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      full_name: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      phone: { type: Sequelize.STRING },
      CCCD: { type: Sequelize.STRING },
      role_code: { type: Sequelize.STRING, defaultValue: 'R2' },
      createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};