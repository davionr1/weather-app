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
    resolvedAddress: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    date: { 
      type: DataTypes.DATE, 
      allowNull: false,
    },
    temperature_avg: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    temperature_max: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    temperature_min: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    temperature_current: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    humidity: { 
      type: DataTypes.DOUBLE, 
      allowNull: false,
    },
    precipitation_prob: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    precipitation_type: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    wind_speed: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    wind_direction: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    visibility: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    sunrise: { 
      type: DataTypes.TIME, 
      allowNull: false,
    },
    sunset: { 
      type: DataTypes.TIME, 
      allowNull: false,
    },
    uv_index: { 
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    weather_condition: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'weather',
  });
  return weather;
};