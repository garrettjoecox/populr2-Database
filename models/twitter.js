
module.exports = (sequelize, DataTypes) => sequelize.define('twitter', {

  handle: DataTypes.STRING,
  followers: DataTypes.INTEGER,
  followersDelta: DataTypes.INTEGER,

}, {

  freezeTableName: true,
  classMethods: {
  },

});
