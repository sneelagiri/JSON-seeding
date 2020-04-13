const Sequelize = require("sequelize");
const db = require("../db");
const Card = require("../credit-card/model");

const Client = db.define("client", {
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  checked: {
    type: Sequelize.BOOLEAN,
  },
  description: {
    type: Sequelize.TEXT,
  },
  interest: {
    type: Sequelize.STRING,
  },
  date_of_birth: {
    type: Sequelize.DATE,
  },
  email: {
    type: Sequelize.STRING,
  },
  account: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Client.hasMany(Card);

module.exports = Client;
