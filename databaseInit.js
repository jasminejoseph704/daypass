const sequelize = require('./config/database');
require('./models/User');
require('./models/GymListing');

sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
  process.exit();
});
