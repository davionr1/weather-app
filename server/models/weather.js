'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  weather.init({
    resolvedAddress: DataTypes.STRING,
    date: DataTypes.DATE,
    temperature_avg: DataTypes.INTEGER,
    temperature_max: DataTypes.INTEGER,
    temperature_min: DataTypes.INTEGER,
    temperature_current: DataTypes.INTEGER,
    humidity: DataTypes.DOUBLE,
    precipitation_prob: DataTypes.FLOAT,
    precipitation_type: DataTypes.STRING,
    wind_speed: DataTypes.FLOAT,
    wind_direction: DataTypes.FLOAT,
    visibility: DataTypes.INTEGER,
    sunrise: DataTypes.TIME,
    sunset: DataTypes.TIME,
    uv_index: DataTypes.FLOAT,
    weather_condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'weather',
  });
  return weather;
};