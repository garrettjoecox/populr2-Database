
module.exports = (sequelize, DataTypes) => sequelize.define('news', {

  queries: DataTypes.STRING,
  hits: DataTypes.INTEGER,
  hitsDelta: DataTypes.INTEGER,

}, {

  freezeTableName: true,
  classMethods: {
  },

});
