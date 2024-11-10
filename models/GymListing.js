const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GymListing = sequelize.define('GymListing', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  price_per_day: { type: DataTypes.FLOAT, allowNull: false },
  images: { type: DataTypes.ARRAY(DataTypes.STRING) },
  status: { type: DataTypes.ENUM('available', 'unavailable'), defaultValue: 'available' },
});

module.exports = GymListing;
