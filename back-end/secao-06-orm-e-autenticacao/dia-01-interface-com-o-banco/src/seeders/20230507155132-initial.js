'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Fortaleza Digital',
        author: 'Dan Brown',
        pageQuantity: 297,
      },
      {
        title: 'Macunaíma',
        author: 'Mário de Alexandre',
        pageQuantity: 229,
      },
      {
        title: 'A audácia dessa mulher',
        author: 'Ana Maria Machado',
        pageQuantity: 201,
      },
      {
        title: 'A morte e a morte de quincas berro d\'agua',
        author: 'Jorge Amado',
        pageQuantity: 104,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
