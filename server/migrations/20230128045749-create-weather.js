'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resolvedAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      temperature_avg: {
        type: Sequelize.INTEGER
      },
      temperature_max: {
        type: Sequelize.INTEGER
      },
      temperature_min: {
        type: Sequelize.INTEGER
      },
      temperature_current: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.DOUBLE
      },
      precipitation_prob: {
        type: Sequelize.FLOAT
      },
      precipitation_type: {
        type: Sequelize.STRING
      },
      wind_speed: {
        type: Sequelize.FLOAT
      },
      wind_direction: {
        type: Sequelize.FLOAT
      },
      visibility: {
        type: Sequelize.INTEGER
      },
      sunrise: {
        type: Sequelize.TIME
      },
      sunset: {
        type: Sequelize.TIME
      },
      uv_index: {
        type: Sequelize.FLOAT
      },
      weather_condition: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('weather');
  }
};