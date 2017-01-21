
module.exports = (sequelize, DataTypes) => sequelize.define('twitter', {

  twitterId: DataTypes.STRING,
  handle: DataTypes.STRING,
  followers: DataTypes.INTEGER,
  followersDelta: DataTypes.INTEGER,

}, {

  freezeTableName: true,
  classMethods: {
    associate: (models) => {
      models.twitter.belongsTo(models.people);
    },
  },

});
