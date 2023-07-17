const { Sequelize } = require('sequelize');

// TODO: 環境変数から取得
const sequelize = new Sequelize('chat', 'root', 'password', {
  host: 'db',
  dialect: 'postgres',
});

module.exports = sequelize;
