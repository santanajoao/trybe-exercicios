'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.removeColumn('Books', 'publisher');
  },
};
