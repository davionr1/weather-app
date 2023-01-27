'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city_id: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      city_ascii: {
        type: Sequelize.STRING
      },
      city_alt: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      country: {
        type: Sequelize.STRING
      },
      iso2: {
        type: Sequelize.STRING
      },
      iso3: {
        type: Sequelize.STRING
      },
      admin_name: {
        type: Sequelize.STRING
      },
      admin_name_ascii: {
        type: Sequelize.STRING
      },
      admin_code: {
        type: Sequelize.STRING
      },
      admin_type: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      density: {
        type: Sequelize.FLOAT
      },
      population: {
        type: Sequelize.INTEGER
      },
      ranking: {
        type: Sequelize.INTEGER
      },
      timezone: {
        type: Sequelize.STRING
      },
      same_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};