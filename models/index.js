const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
//const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isAlphanumeric: true},
    defaultValue: 'No Title Given'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isAlphanumeric: true},
    defaultValue: 'beavers'
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'no content'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isAlpha: true},
    defaultValue: 'Spongebob Nonamepants'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isEmail: true},
    defaultValue: 'nonegiven@lame.com'
  }
});

module.exports = {
  db, Page, User
};
