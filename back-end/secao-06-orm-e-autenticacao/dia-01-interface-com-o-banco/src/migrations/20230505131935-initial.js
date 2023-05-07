'use strict';

/**
 * @type {import('sequelize-cli').Migration}
 **/
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down (queryInterface, _Sequelize) {
    return queryInterface.dropTable('Books', null, {});
  }
};
