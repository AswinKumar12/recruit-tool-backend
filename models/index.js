const { Sequelize } = require('sequelize');
const { db } = require('../config.json');

const { pool, database, dialect, password, user, host } = db;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
});

require('./candidates.model')(sequelize);

module.exports = sequelize;