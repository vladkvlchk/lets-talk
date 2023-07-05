const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const UserContacts = sequelize.define("user_contact", {
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  contactIds: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

module.exports = UserContacts;
