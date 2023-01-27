"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Locations.init(
    {
      city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city_ascii: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city_alt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iso2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iso3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_name_ascii: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      density: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timezone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      same_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Locations",
    }
  );
  return Locations;
};
