const Sequelize = require("sequelize");
const db = require("../db");
const Client = require("../client/model");

const Card = db.define("card", {
  type: {
    type: Sequelize.STRING,
  },
  number: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  expirationDate: {
    type: Sequelize.STRING,
  },
});

Card.belongsTo(Client);

module.exports = Card;
