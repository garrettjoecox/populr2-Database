
module.exports = (sequelize, DataTypes) => sequelize.define('news', {

  queries: DataTypes.STRING,
  headlines: DataTypes.INTEGER,
  headlinesDelta: DataTypes.INTEGER,

}, {

  freezeTableName: true,

});
