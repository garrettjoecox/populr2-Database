
module.exports = (sequelize, DataTypes) => sequelize.define('people', {

  displayName: DataTypes.STRING,

}, {

  freezeTableName: true,

});
