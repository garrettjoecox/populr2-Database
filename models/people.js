
module.exports = (sequelize, DataTypes) => sequelize.define('people', {

  displayName: DataTypes.STRING,

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
