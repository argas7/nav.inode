const { Sequelize } = require('sequelize');
const models = require('./models');
require('dotenv').config();

const sequelizeConnection = new Sequelize(process.env.DATABASE_URL);

const instancedModels = Object.values(models).map((model) => model(sequelizeConnection));
sequelizeConnection
  .sync()
  .then(() => console.log('# =====================> Database conected!'));

module.exports = instancedModels;
