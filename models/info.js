
module.exports = (sequelize, DataTypes) => sequelize.define('info', {

  wikiUrl: DataTypes.STRING,
  bio: DataTypes.TEXT,
  birthdate: DataTypes.DATE,
  occupation: DataTypes.STRING,
  image: DataTypes.STRING,

}, {

  freezeTableName: true,
  classMethods: {
  },

});
