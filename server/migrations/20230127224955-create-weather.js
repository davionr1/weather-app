'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weather_id: {
        type: Sequelize.INTEGER
      },
      temperature_current: {
        type: Sequelize.SMALLINT
      },
      temperature_high: {
        type: Sequelize.SMALLINT
      },
      temperature_low: {
        type: Sequelize.SMALLINT
      },
      precipitation_chance: {
        type: Sequelize.STRING
      },
      precipitation_amount: {
        type: Sequelize.TINYINT
      },
      humidity: {
        type: Sequelize.STRING
      },
      wind_speed: {
        type: Sequelize.SMALLINT
      },
      visibility: {
        type: Sequelize.STRING
      },
      sun_rise: {
        type: Sequelize.DATE
      },
      sun_set: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Weather');
  }
};