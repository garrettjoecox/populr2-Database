
import Sequelize from 'sequelize';
import db from '../connection';

export default db.define('twitter', {
  fullName: { type: Sequelize.STRING(190), primaryKey: true },
  handle: { type: Sequelize.STRING },
  avi: { type: Sequelize.STRING },
  followers: { type: Sequelize.INTEGER, defaultValue: 0 },
  followersPeriodic: { type: Sequelize.TEXT('long') },
  followersDelta: { type: Sequelize.INTEGER, defaultValue: 0 },
  followersDeltaPeriodic: { type: Sequelize.TEXT('long') },
  score: { type: Sequelize.INTEGER, defaultValue: 0 },
  scoreDelta: { type: Sequelize.INTEGER, defaultValue: 0 },
  tweets: { type: Sequelize.TEXT('long') }
}, { freezeTableName: true });
