
const fs = require('fs');
const path = require('path').join;
const Sequelize = require('sequelize');

const config = require('rc')('populr', {
  database: {
    database: 'populr',
    username: 'root',
    password: null,
    host: 'localhost',
    port: 3306,
    logging: false,
    dialectOptions: {
      charset: 'utf8mb4',
    },
  },
}).database;

const connection = new Sequelize(config.database, config.username, config.password, config);

const db = {
  connection,
  Sequelize,
};

fs
  .readdirSync(path(__dirname, 'models'))
  .forEach((f) => {
    const model = connection.import(path(__dirname, 'models', f));
    db[model.name] = model;
  });

Object.keys(db)
  .forEach((model) => {
    if ('associate' in db[model]) db[model].associate(db);
  });

module.exports = db;
