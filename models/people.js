
module.exports = (sequelize, DataTypes) => sequelize.define('people', {

  displayName: DataTypes.STRING,
  position: DataTypes.INTEGER,
  positionDelta: DataTypes.INTEGER,

}, {

  freezeTableName: true,
  classMethods: {
    associate: (models) => {
      models.people.hasOne(models.twitter);
      models.people.hasOne(models.info);
      models.people.hasOne(models.news);
    },
  },

});
