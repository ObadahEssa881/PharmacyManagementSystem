const Sequelize = require("sequelize");

const sequelize = new Sequelize("database_name", "user", "password", {
  dialect: "mysql",
  hostname: "localhost",
  logging: false, // this will disable the sequelize logging
});

module.exports = sequelize;
