"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Weather.init(
    {
      weather_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      temperature_current: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      temperature_high: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      temperature_low: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      precipitation_chance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precipitation_amount: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      humidity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      wind_speed: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      visibility: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sun_rise: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sun_set: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Weather",
    }
  );
  return Weather;
};
