'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'to_points_converter', {
      type: Sequelize.NUMBER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'to_points_converter');
  }
};
