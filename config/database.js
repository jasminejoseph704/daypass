require('dotenv').config();  // Ensure this line is at the very top of the file
const { Sequelize } = require('sequelize');

console.log(process.env.DATABASE_URL); // Add this line to see if the DATABASE_URL is being loaded

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Optionally, you can disable Sequelize query logging
});

module.exports = sequelize;
